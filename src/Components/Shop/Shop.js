import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
const Shop = () => {
    const first10= fakeData.slice(0,10)
    const [products,seProducts]=useState(first10);
    return (
        <div>
           <div className="container">
            <div className="product-container">
            <ul>
                {
                    products.map(product =><li>{product.name}</li>)
                }
            </ul>
            </div>
            <div className="card-container">
<h1>For card section</h1>
            </div>
           </div>
        </div>
    );
};

export default Shop;