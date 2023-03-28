import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img,name,seller,quantity,price,ratings} =props.product
    return (
        <div className='product'>
           <img src={img} alt="" />
         <div className='product-info'>
         <h6 className='p-name'>{name}</h6>
           <p>Price: ${price}</p>
           <p>Manufacturer: {seller}</p>
           <p>Ratings: {ratings} start</p>
         </div>
         <button className='btn-cart' >Add to Cart</button>
        </div>
    );
};

export default Product;