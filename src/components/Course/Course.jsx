import React from 'react';
import backgroundImage from '../../images/banner-image.png'
import './Course.css'

const Course = () => {
    const courses = [
        {id:1, name:'HTML5 and CSS3 Fundamentals', price: 100},
        {id:2, name:'Build a Quiz App with HTML, CSS, and JavaScript', price: 200},
        {id:3, name:'Programming 101', price: 300},
        {id:4, name:'Stanford Introduction to Food and Health', price: 400},
        {id:5, name:'Introduction to User Experience Design', price: 500},
        {id:6, name:'Successful Negotiation: Essential Strategies and Skills', price: 600},
        {id:7, name:'Learn to Program: The Fundamentals', price: 700},
        {id:8, name:'HTML5 and CSS3 Fundamentals', price: 800},
        {id:9, name:'HTML5 and CSS3 Fundamentals', price: 900},
        {id:10, name:'HTML5 and CSS3 Fundamentals', price: 1000},
        {id:11, name:'HTML5 and CSS3 Fundamentals', price: 1100},
        {id:12, name:'HTML5 and CSS3 Fundamentals', price: 1200},
    ]
    return (
        <div>
            <div className='banner'>
                <h1>Start learning from<br/>
                   <span className='orange-color'>The world’s best online courses</span></h1>
            </div>

        </div>
    );
};

export default Course;