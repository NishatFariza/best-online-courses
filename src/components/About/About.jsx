import React from 'react';
import './About.css'
import { SiHashnode } from 'react-icons/si'

const About = () => {
    return (
        <div className='about-wrapper' >
            <h2>About React</h2>
            <div className='about-item'>
                <h3 className='about-question'><SiHashnode className='question-icon'></SiHashnode>How React Works?</h3>
                <h4 className='strong-text'>Ans:  <span className='about-ans'>React.js is one of the most talked about JavaScript web frameworks in years.
                js is one of the most talked about JavaScript web frameworks in years.</span></h4>
            </div>
            <div className='about-item'>
                <h3 className='about-question'><SiHashnode className='question-icon'></SiHashnode>How React Works?</h3>
                <h4 className='strong-text'>Ans:  <span className='about-ans'>React.js is one of the most talked about JavaScript web frameworks in years.</span></h4>
            </div>
            <div className='about-item'>
                <h3 className='about-question'><SiHashnode className='question-icon'></SiHashnode>How React Works?</h3>
                <h4 className='strong-text'>Ans:  <span className='about-ans'>React.js is one of the most talked about JavaScript web frameworks in years.</span></h4>
            </div>
        </div>
    );
};

export default About;