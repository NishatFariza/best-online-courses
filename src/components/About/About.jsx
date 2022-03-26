import React from 'react';
import './About.css'
import { SiHashnode } from 'react-icons/si'

const About = () => {
    return (
        <div className='about-wrapper' >
            <h2>About React</h2>
            <div className='about-item'>
                <h3 className='about-question'><SiHashnode className='question-icon'></SiHashnode>How React Works?</h3>
                <h4 className='strong-text'>React Work:  <span className='about-ans'>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. React implements a virtual DOM that is basically a DOM tree representation in JavaScript.It converts JavaScript code to JSX(JavaScript XML) by the help of react package. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.</span></h4>
            </div>
            <div className='about-item'>
                <h3 className='about-question'><SiHashnode className='question-icon'></SiHashnode>What are the differences between props and state ?</h3>
                <h4 className='strong-text'>Props:  <span className='about-ans'> Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.</span></h4>
                <h4 className='strong-text'>State:  <span className='about-ans'>The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.</span></h4>
            </div>
            <div className='about-item'>
                <h3 className='about-question'><SiHashnode className='question-icon'></SiHashnode> How does useState work?</h3>
                <h4 className='strong-text'>useState:  <span className='about-ans'>The useState() is a Hook that allows you to have state variables in functional components. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries. </span></h4>
            </div>
        </div>
    );
};

export default About;