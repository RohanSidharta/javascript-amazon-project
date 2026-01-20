import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts,loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

async function loadPage(){        //it is a shortcut for previous promises

try{
    //throw 'error1';
    await loadProductsFetch();          //await lets us wait for that line to finish

    const value = await new Promise((resolve)=>{
        loadCart(()=>{
            resolve('value3');
        });                 //payment summary is loaded it is the next step after loading 
       });


} catch(error){
    console.log('unexpected error, please try again later');
}
    

    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();




/*
Promise.all([
  loadProductsFetch(),
    new Promise((resolve)=>{
        loadCart(()=>{
            resolve('madda gudu');
        });                 //payment summary is loaded it is the next step after loading 
       })

]).then((values)=>{
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});
*/
/*
new Promise((resolve)=>{             //a promise is same as aa done() method in jasmine it waits until a code is loaded properly then goes to next step using resolve
    loadProducts(()=>{           //this loads alll the products in the page
        resolve('value1');              //it is used to wait for all the products to load in the page
    });

}).then((value)=>{                    //once all the products are loaded then() is used to do the next steps
   console.log(value);
    return new Promise((resolve)=>{
    loadCart(()=>{
        resolve();
    });                 //payment summary is loaded it is the next step after loading 
   });
                                //.then is a function used to add steps to the promise so once a step got resolved another step will be executed
}).then(()=>{
        renderOrderSummary();
        renderPaymentSummary();
});
*/

/*
loadProducts(()=>{              //first the products are loaded
    loadCart(()=>{                 //then we will liad the cart
        renderOrderSummary();
        renderPaymentSummary();
    });

});
*/