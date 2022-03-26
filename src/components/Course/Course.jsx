import React from 'react';

const Course = (props) => {
    console.log(props)
    const {name, picture, balance} =props.course;
    return (
        <div className='card'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>{balance}</p>
        </div>
    );
};

export default Course;