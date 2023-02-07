import React from 'react';

const Card = (props) => {
    const card=props.card;
    let total=0;
    for(let i=0;i<card.length;i++){
        const product=card[i];
        total=total+product.price;
    }
    return (
        <div>
            <h1>Order Summary</h1>
            <p>Iteams Summary: {card.length}</p>
            <p>Total: {total}</p>
        </div>
    );
};

export default Card;