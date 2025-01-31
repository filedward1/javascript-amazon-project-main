import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

// import '../data/cart-class.js';
// import '../data/backend-practice.js';

async function loadPage() { // same as new Promise((resolve) => {console.log('load page');})
    // console.log('load page');

    try {
        //throw 'error1';

        await loadProductsFetch(); // same as loadProductsFetch().then(() => {}) 
    
        const value = await new Promise((resolve, reject) => { 
            // throw 'error2';
            loadCart(() => { 
                //reject('error3'); // this code runs in the future
                resolve('value3');
            });
        });

    } catch (error) { // same as .catch((error) => {})
        console.log('Unexpected error. Please try again later.');
    }

    renderOrderSummary();
    renderPaymentSummary();

    // return 'value2'; //same as resolve('value2')
}
loadPage()

// Promise.all([
//     loadProductsFetch(),
//     new Promise((resolve) => {
//         loadCart(() => {
//             resolve();
//         });
//     })

// ]).then((values) => {
//     console.log(values);
//     renderOrderSummary();
//     renderPaymentSummary();
// });

// new Promise((resolve) => {
//     loadProducts(() => {
//         resolve('value1');
//     });

// }).then((value) => {
//     console.log(value);

//     return new Promise((resolve) => {
//         loadCart(() => {
//             resolve();
//         });
//     });

// }).then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
// });

// loadProducts(() => {
//     loadCart(() => {
//         renderOrderSummary();
//         renderPaymentSummary();
//     });
// });