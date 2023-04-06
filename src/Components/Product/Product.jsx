import React from 'react';
import './Product.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const Product = (props) => {
  // console.log(props);
    const {img,name,seller,price,ratings} =props.product;
    const handleAddToCart = props.handleAddToCart

    return (
        <div className='product'>
           <img src={img} alt="" />
         <div className='product-info'>
         <h6 className='p-name'>{name}</h6>
           <p>Price: ${price}</p>
           <p>Manufacturer: {seller}</p>
           <p>Ratings: {ratings} start</p>
   
         </div>
         <button onClick={()=>handleAddToCart(props.product)} className='btn-cart' >

          Add to Cart  </button>
        </div>
    );
};

export default Product;