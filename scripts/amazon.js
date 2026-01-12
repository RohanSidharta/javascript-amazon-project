

let productsHTML = '';
// now we have to loop through the array using for each loop
//this code below will generate html code for all the  products
//because we used bactics we can insert dynamic values from products array into that html so that each products will get its own html code
//products is an array so we are loopiing it 
products.forEach((product)=>{  //productsHTML will store the html code in it which we can use it to display in weboage
     productsHTML = productsHTML + `  
            <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
               ${product.name} 
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                src="images/ratings/rating-${product.rating.stars *10}.png">
                <div class="product-rating-count link-primary">
                ${product.rating.count}
                </div>
            </div>

            <div class="product-price">
                $${(product.priceCents/100).toFixed(2)}
            </div>

            <div class="product-quantity-container">
                <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart"
            data-product-id="${product.id}">
                Add to Cart
            </button>
            </div>`
            
});
//we have completed 2 steps which are saving data and other is creating html for the data 
//now coming to the third step which is combining html and put it on the web page
 // this will combine all the html code of each products together
//now last step will be displayig=ng on webpage using DOM
document.querySelector('.js-products-grid').innerHTML=productsHTML;
//the above code will insert all the html into the class ja-products-grid so in html we dont need to write that code the javascript will write it for us
document.querySelectorAll('.js-add-to-cart').forEach((button)=>{ //we are looping add to cart button and when it is clicked the data set in that buttton we will get
    button.addEventListener('click',()=>{   //this line will add a eventlistener to button whenever it is clicked the dataset of product will be added to the vaiable
        const productId=button.dataset.productId; //this line will get the product name from button element and store it in variable called productName

        let matchingItem;   //this variable will store the matching items in cart if they matched it will increase the quantity 

        cart.forEach((item)=>{     //it will compare the items in the product.js with the cart array in cart.js for match
            if(productId===item.productId){  //this line will check whether there are matching items present in cart or not
                matchingItem=item;      //it will update the matching item in this
            }
        });
        if(matchingItem){         //if any matching item is found in the array of cart then the quantity of that item in incremented
            matchingItem.quantity +=1;  //quantity in incremented
        }else{
            cart.push({            //if the match is not found that means the product is not added to cart from product.js so we will add a new item to the cart array
                productId: productId,
                quantity: 1
            });
        }
        let cartQuantity=0;
        cart.forEach((item)=>{
            cartQuantity+=item.quantity;            //this adds the total sum of quantity and stores it into cartQuantity variable
        });

        document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
        console.log(cart);
        console.log(cartQuantity);
    });
});