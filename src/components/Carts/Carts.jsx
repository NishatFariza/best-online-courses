import React from 'react';
import './Carts.css';
import { RiDeleteBin5Fill } from 'react-icons/ri';

const Carts = ({cart}) => {
    // console.log(cart);
    const {name, picture} =cart;
    return (
        <div className='cart-item'>
              <img src={picture} alt="" />
              <h5>{name}</h5>
              <a href=""><RiDeleteBin5Fill></RiDeleteBin5Fill></a>

        </div>
    );
};

export default Carts;