import {cart,removefromCart,updateDeliveryOption} from '../../data/cart.js';
import {products} from '../../data/products.js';
import { formatCurrency } from '../utils/money.js';
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';   //this will import dayjs function directly from external library
import {deliveryOptions} from '../../data/deliveryOptions.js';

export function renderOrderSummary(){

        let cartSummaryHTML='';            //this variable will store the html code for products to display in checkout html

        cart.forEach((cartItem)=>{                  //looping through cart arrray to get the product.id of each product
            const productId=cartItem.productId;         //stodring product.id of products into productId variable

            let matchingProduct;                 //this will store all the matching products in cart and and products array

        products.forEach((product)=>{                  //looping through product array to get the productid of every product in product array
                if(product.id === productId){            //checking if the products in product array match with cart array
                    matchingProduct=product;                 //if the products match then the product details will be stored in matchingn product variable
                }
            });

            const deliveryOptionId=cartItem.deliveryOptionId;

            let deliveryOption;

            deliveryOptions.forEach((option)=>{                 //this will loop througth deliveryoptions and matches the selected options id
                if(option.id === deliveryOptionId){
                    deliveryOption = option;
                }
            });

            const today=dayjs();               //this calculates the date of delivery and dormats it into readable form
                const deliveryDate=today.add(deliveryOption.deliveryDays,'days');     //what this will do is add 7 days to the current date and show it in the html webpage
                const dateString=deliveryDate.format('dddd, MMMM, D');                //the date is represented in the form of string like monday,october 9 thsi is easy to read
            //dddd will print the day of the week like monday 
            //MMMM will print the month in words
            //D will print the date like 9 or 10 or 21
            
        cartSummaryHTML+= `
            <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
                    <div class="delivery-date">
                    Delivery date: ${dateString}
                    </div>

                    <div class="cart-item-details-grid">
                    <img class="product-image"
                        src="${matchingProduct.image}">

                    <div class="cart-item-details">
                        <div class="product-name">
                        ${matchingProduct.name}
                        </div>
                        <div class="product-price">
                        $${formatCurrency(matchingProduct.priceCents)}
                        </div>
                        <div class="product-quantity">
                        <span>
                            Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                        </span>
                        <span class="update-quantity-link link-primary">
                            Update
                        </span>
                        <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                            Delete
                        </span>
                        </div>
                    </div>

                    <div class="delivery-options">
                        <div class="delivery-options-title">
                        Choose a delivery option:
                        </div>
                    ${deliveryOptionsHTML(matchingProduct,cartItem)}
                    </div>
                    </div>
                </div>`;
        })

        function deliveryOptionsHTML(matchingProduct,cartItem){             //this function generates the html code for the delivery options inside checkout html for each product

            let html='';

            deliveryOptions.forEach((deliveryOption)=>{              //this code wil calculate the date according to the delivery option and format sit into readble form
                const today=dayjs();                     //dayjs already consists methods called .add() and .format() which allows to add a certain period to the current date and format the dat ein readable format
                const deliveryDate=today.add(deliveryOption.deliveryDays,'days');
                const dateString=deliveryDate.format('dddd, MMMM, D');

                const priceString = deliveryOption.priceCents=== 0                   //this gives the proce if they choose the first delivery option which takes time to deliver it is free but if not the charges will e applied
                    ? 'FREE'
                    : `$${formatCurrency(deliveryOption.priceCents)}-`;

                    const isChecked=deliveryOption.id===cartItem.deliveryOptionId;


                    html+=     //this variable contains the html code for each product
                        ` <div class="delivery-option js-delivery-option" 
                            data-product-id="${matchingProduct.id}"
                            data-delivery-option-id="${deliveryOption.id}">
                                <input type="radio"
                                    ${isChecked ? 'checked' : ''}
                                    class="delivery-option-input"
                                    name="delivery-option-${matchingProduct.id}">
                                <div>
                                    <div class="delivery-option-date">
                                    ${dateString}
                                    </div>
                                    <div class="delivery-option-price">
                                    ${priceString} - Shipping
                                    </div>
                                </div>
                                </div>`

            });
            return html;
        }


        document.querySelector('.js-order-summary').innerHTML=cartSummaryHTML;        //this will display the html code in the checkout.html page 
        //matchingproduct.id is used in the place of the class because every product needs to have a different class name for radio to work differently for each product product id is unique so it is used to display different radio for each product 
            


        document.querySelectorAll('.js-delete-link').forEach((link)=>{
            link.addEventListener('click',()=>{
                const productId=link.dataset.productId;
                removefromCart(productId);

                const container = document.querySelector(`.js-cart-item-container-${productId}`);
                container.remove();
            });
        });
        /*hello();    //this will use the function hello inside the external library which was loaded usi
        const today=dayjs();
        const deliveryDate=today.add(7,'days');      //this will add 7 days to today date 
        console.log(deliveryDate);
        console.log(deliveryDate.format('dddd, MMMM, D'));*/


        document.querySelectorAll('.js-delivery-option').forEach((element)=>{
            element.addEventListener('click',()=>{
                const {productId,deliveryOptionId} = element.dataset;
                updateDeliveryOption(productId,deliveryOptionId);
                renderOrderSummary();
            });
        });
    }

    
