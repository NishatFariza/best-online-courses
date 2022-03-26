import React from 'react';
import './Course.css';
import { BsFillCartCheckFill } from 'react-icons/bs';

const Course = (props) => {
    // console.log(props)
    const {name, picture, balance} =props.course;
    const {handleAddToCart, course} =props;
    // console.log(handleAddToCart);
    return (
        <div className='card'>
            <div className='image-wrap'><img src={picture} alt="" /></div>
            <div className='course-info'>
            <h2>{name}</h2>
            <p>Price: {balance}</p>
            </div>
            <button onClick={ () => handleAddToCart(course)} className='cart-btn'>
                <p className='btn-text'>Add To Cart</p>   
            <BsFillCartCheckFill className='btn-icon'></BsFillCartCheckFill>
            </button>
        </div>
    );
};

export default Course;