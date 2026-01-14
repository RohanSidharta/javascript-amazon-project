import {cart,removefromCart} from '../data/cart.js';
import {products} from '../data/products.js';
import { formatCurrency } from './utils/money.js';

let cartSummaryHTML='';            //this variable will store the html code for products to display in checkout html

cart.forEach((cartItem)=>{                  //looping through cart arrray to get the product.id of each product
    const productId=cartItem.productId;         //stodring product.id of products into productId variable

    let matchingProduct;                 //this will store all the matching products in cart and and products array

 products.forEach((product)=>{                  //looping through product array to get the productid of every product in product array
        if(product.id === productId){            //checking if the products in product array match with cart array
            matchingProduct=product;                 //if the products match then the product details will be stored in matchingn product variable
        }
    })
    
    
   cartSummaryHTML+= `
    <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
            Delivery date: Tuesday, June 21
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
                <div class="delivery-option">
                <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                <div>
                    <div class="delivery-option-date">
                    Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                    FREE Shipping
                    </div>
                </div>
                </div>
                <div class="delivery-option">
                <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">   
                <div>
                    <div class="delivery-option-date">
                    Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                    $4.99 - Shipping
                    </div>
                </div>
                </div>
                <div class="delivery-option">
                <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                <div>
                    <div class="delivery-option-date">
                    Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                    $9.99 - Shipping
                    </div>
                </div>
                </div>
            </div>
            </div>
  </div>`;
})


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
