import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div>
               <div className='banner'>
                        <h1>Start learning from<br/>
                        <span className='orange-color'>The world’s best online courses</span></h1>

                </div>
                <div className='course'>
                    <div className='course-wrapper'>
                    {
                        courses.map(course => <Course course={course}
                        key={course.id}
                        >

                        </Course>)
                    }
                    </div>
                    <div className='cart-wrapper'>
                        <h2>This is cart</h2>
                    </div>
                </div>
            

        </div>
    );
};

export default Courses;