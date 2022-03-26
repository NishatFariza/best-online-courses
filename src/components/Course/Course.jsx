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
            <p>{balance}</p>
            <button>Add To Cart</button>
            </div>
        </div>
    );
};

export default Course;