const products=[{
    image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
    name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    ratings:{
        stars:4.5,
        count:87
    },
    priceCents:1090
    
},
//this objects represent each product in amazon webpage
    //it contains all the details like image,name,cost,rating everything in the same structure
{
    image: 'images/products/intermediate-composite-basketball.jpg',
    name: 'Intermediate Size Basketball',
    ratings:{
        stars:4,
        count:127
    },
    priceCents:2095
},
//each details inside {} barkets are product objects which are stored inside and array
{
    image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name: ' Adults Plain Cotton T-Shirt - 2 Pack',
    ratings:{
        stars:4.5,
        count:56
    },
    priceCents:799
}];

let productsHTML = '';
// now we have to loop through the array using for each loop
//this code below will generate html code for all the three products
//because we used bactics we can iinsert dynamic values from products array into that html so that each products will get its own html code
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
                src="images/ratings/rating-${product.ratings.stars *10}.png">
                <div class="product-rating-count link-primary">
                ${product.ratings.count}
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

            <button class="add-to-cart-button button-primary">
                Add to Cart
            </button>
            </div>`;
            
})
//we have completed 2 steps which are saving data and other is creating html for the data 
//now coming to the third step which is combining html and put it on the web page
console.log(productsHTML); // this will combine all the html code of each products together
//now last step will be displayig=ng on webpage using DOM
document.querySelector('.js-products-grid').innerHTML=productsHTML;
//the above code will insert all the html into the class ja-products-grid so in html we dont need to write that code the javascript will write it for us