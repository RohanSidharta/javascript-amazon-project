
export const cart=[{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2
},{
    productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity:1
}];


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
}