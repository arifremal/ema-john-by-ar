import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Reviewitems from '../Review/Reviewitems';
import './order.css'
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart =useLoaderData()
    const [cart,settCart]=useState(savedCart)
    const removefromcard =(id)=>{
       const remaining =cart.filter(product=> product.id !== id);
       settCart(remaining)
       removeFromDb(id)
    }
    console.log(savedCart);
    return (
        <div className='shop-container'>
            <div className='Review-container'>
                {
                    cart.map(product => <Reviewitems
                    key={product.id}
                    product={product}
                    removefromcard={removefromcard}
                    ></Reviewitems>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>
           
        </div>
    );
};

export default Orders;