import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Card from '../Card/Card';
import Product from '../Products/Product';
import './Shop.css'
const Shop = () => {
    const first10= fakeData.slice(0,10)
    const [products,seProducts]=useState(first10);
    const [card,seCard]=useState([]);
    const handleAddProduct=(product)=>{
        console.log(product);
        const newCard=[...card,product];
        seCard(newCard);
    }

    return (
        <div>
           <div className="container">
            <div className="product-container">
           
                {
                    products.map(product =><Product handleAddProduct={handleAddProduct} product={product}/>)
                }
            
            </div>
            <div className="card-container">
                   <Card card={card}/>
            </div>
           </div>
        </div>
    );
};

export default Shop;