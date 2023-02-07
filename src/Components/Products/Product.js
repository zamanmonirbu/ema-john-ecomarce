import React from 'react';
import './Product.css';
const Product = (props) => {
   // console.log(props);
   const {name,img,seller,stock,price}=props.product;
     return (
        <div className='product'>
            <div className="product-img">
            <img src={img} alt="img not found" />
            </div>
           <div className="details">
                <h4 className='product-name'> {name}</h4>
                    
                    <p>Manufactured By: {seller} </p>               
                    <p>${price}</p>
                   <p><small>Only {stock} left in  stock - Order Now</small></p>
                    <button className='main-button' onClick={ ()=>props.handleAddProduct(props.product)}>Add to card</button>
           </div>
        </div>
    );
};

export default Product;

