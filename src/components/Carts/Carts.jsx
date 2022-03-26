import React from 'react';

const Carts = ({cart}) => {
    // console.log(cart);
    const {name, picture} =cart;
    return (
        <div className='cart-item'>
             <img src={picture} alt="" />
            <h6>{name}</h6>
        </div>
    );
};

export default Carts;