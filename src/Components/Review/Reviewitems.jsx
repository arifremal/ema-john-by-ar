import React from 'react';
import './review.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// import { faCableCar } from '@fortawesome/free-solid-svg-icons';
const Reviewitems = ({product,removefromcard}) => {
    const { id, img, price, name, quantity } = product;
    return (
        <div className='review-item'>
           <img src={img} alt="" />
           <div className='review-details' >
            <p>{name}</p>
            <p>Price <span className='orange-text'>$ {price}</span> </p>
            <p>Order Quantity <span className='orange-text'>{quantity}</span> </p>

           </div>
           <button onClick={()=>removefromcard(id)} className='btn-delete'> Delete</button>
        </div>
    );
};

export default Reviewitems;