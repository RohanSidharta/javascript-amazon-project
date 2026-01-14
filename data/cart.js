
export let cart= JSON.parse(localStorage.getItem('cart'));       //getting cart array from local storage , localstorage saves data in the form of string so we are using json.parse to convert it from string to html
    if(!cart){       //it will check whether the cart is empty or not if the cart is empty then it will resturn those default values
        cart= [{
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 2
        },{
            productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity:1
        }];
        
    }



function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));     //adding cart array to local storage so whenever we refresh the cart elements dont change
}
//using json.stringify because local storage saves the data in the form of strings

export function addToCart(productId){     //productid parameter is used in function this function dows the matchingitem and quantity incrementatio of the cartquantity
    
    let matchingItem;   //this variable will store the matching items in cart if they matched it will increase the quantity 

    cart.forEach((cartItem)=>{     //it will compare the items in the product.js with the cart array in cart.js for match
        if(productId===cartItem.productId){  //this line will check whether there are matching items present in cart or not
            matchingItem=cartItem;      //it will update the matching item in this
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
    saveToStorage();                 //calling this function so whenever a product is added to the cart the local storage gets updated
} 

export function removefromCart(productId){
    const newCart=[];           //this will store all the products in cart except the one which we want to delete so the deleted one will not exist anymore in the cart
    cart.forEach((cartItem)=>{
        if(cartItem.productId !== productId){      //what this will do is if the we will be getting product id of the product we waant to delete from checkout.js 
            newCart.push(cartItem);               //the products which are not matching with the productid will be pushed into the new array the one which we want to delete will be not pushed into newCart because its productid matches with the one we want to delete
        }
    });

    cart=newCart;

    saveToStorage();        //calling this function so whenever a product is removed from the cart the local storage gets updated
}