import React from 'react';
import './Course.css'

const Course = (props) => {
    console.log(props)
    const {name, picture, balance} =props.course;
    return (
        <div className='card'>
            <div className='image-wrap'><img src={picture} alt="" /></div>
            <div className='course-info'>
            <h2>{name}</h2>
            <p>Price: {balance}</p>
            </div>
            <button className='cart-btn'>Add To Cart</button>
        </div>
    );
};

export default Course;