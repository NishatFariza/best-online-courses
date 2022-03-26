import React, { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([])
    const [cart, setCart] =useState([])

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    const handleAddToCart = (course) =>{
        //   console.log(course);
          setCart([...cart, course])
        //   console.log(cart);

    }


    return (
        <div className='main-wrapper'>
               <div className='banner'>
                        <h1>Start learning from<br/>
                        <span className='orange-color'>The world’s best online courses</span></h1>

                </div>
                <div className='course'>
                    <div className='course-wrapper'>
                    {
                        courses.map(course => <Course course={course}
                        key={course.id}
                        handleAddToCart={handleAddToCart}
                        >

                        </Course>)
                    }
                    </div>
                    <div className='cart-wrapper'>
                        <h4>Your Course</h4>
                        <div>
                            {
                                cart.map(cart => <Carts cart={cart} key={cart.id}></Carts>)
                            }
                        <button className='reset-btn'>Reset All</button>
                        <button className='random-btn'>Random</button>
                        </div>
                    </div>
                </div>
            

        </div>
    );
};

export default Courses;