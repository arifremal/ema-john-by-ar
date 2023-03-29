import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const {cart} = props
let totall =0;
let shipping =0;
    for (const product of cart){
        totall =totall + product.price
        shipping =shipping + product.shipping
    }
    const tax = totall*7/100
    const grand = totall + shipping + tax

    return (
        <div className='cart'>
               <h4>Order Summery</h4>
        <p>Selected Item:{cart.length}</p>
        <p>Total Price:${totall}</p>
        <p>Shipping:${shipping}</p>
        <p>Tax: ${tax} </p>
        <h5>Grand Totall:${grand.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;