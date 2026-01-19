class Cart {
    cartItems;
    localStorageKey;

    constructor(localStorageKey){
        this.localStorageKey = localStorageKey;
        this.loadFromStorage();
    }

        loadFromStorage(){
            this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));       //getting cart array from local storage , localstorage saves data in the form of string so we are using json.parse to convert it from string to html
        
            if(!this.cartItems){       //it will check whether the cart is empty or not if the cart is empty then it will resturn those default values
            this.cartItems = [{
                productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                quantity: 2,
                deliveryOptionId:'1'
            },{
                productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
                quantity:1,
                deliveryOptionId:'2'
            }];
            
        }
    }

    saveToStorage(){
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));     //adding cart array to local storage so whenever we refresh the cart elements dont change
    }
                                                                                    //using json.stringify because local storage saves the data in the form of strings
    addToCart(productId){     //productid parameter is used in function this function dows the matchingitem and quantity incrementatio of the cartquantity
                   
        let matchingItem;   //this variable will store the matching items in cart if they matched it will increase the quantity 

        this.cartItems.forEach((cartItem)=>{     //it will compare the items in the product.js with the cart array in cart.js for match
            if(productId===cartItem.productId){  //this line will check whether there are matching items present in cart or not
                matchingItem=cartItem;      //it will update the matching item in this
                
            }
        });
        if(matchingItem){         //if any matching item is found in the array of cart then the quantity of that item in incremented
            matchingItem.quantity +=1;  //quantity in incremented
        }else{
            this.cartItems.push({            //if the match is not found that means the product is not added to cart from product.js so we will add a new item to the cart array
                productId: productId,
                quantity: 1,
                deliveryOptionId:'1'
            });
        }

        this.saveToStorage();                 //calling this function so whenever a product is added to the cart the local storage gets updated
    }


    removefromCart(productId){
        const newCart=[];           //this will store all the products in cart except the one which we want to delete so the deleted one will not exist anymore in the cart
        this.cartItems.forEach((cartItem)=>{
            if(cartItem.productId !== productId){      //what this will do is if the we will be getting product id of the product we waant to delete from checkout.js 
                newCart.push(cartItem);               //the products which are not matching with the productid will be pushed into the new array the one which we want to delete will be not pushed into newCart because its productid matches with the one we want to delete
            }
        });

        this.cartItems=newCart;         //we are using this. because all the functions are  inside an object so to access them we are calling the object using this
                                            //#this. represents the cart object and using this. we can access the function or objects inside the cart object
        this.saveToStorage();        //calling this function so whenever a product is removed from the cart the local storage gets updated
    }

    updateDeliveryOption(productId,deliveryOptionId){
   
        let matchingItem;//this variable will store the matching items in cart if they matched it will increase the quantity 
    
        this.cartItems.forEach((cartItem)=>{     //it will compare the items in the product.js with the cart array in cart.js for match
            if(productId===cartItem.productId){  //this line will check whether there are matching items present in cart or not
                matchingItem=cartItem;      //it will update the matching item in this
                
            }
        });
        matchingItem.deliveryOptionId = deliveryOptionId;
        this.saveToStorage();
    }

}


//each object we generate from the class is called instance of the class
const cart = new Cart('cart-oop');           //this is how a class is called, we use new keywordi infront of the class name
const businessCart = new Cart('cart-business');



console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart);

