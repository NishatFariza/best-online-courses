import React from 'react';
import logo from '../../images/logo.png.png'
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar'>
           <img src={logo} alt="" />
              <div className='menu-wrapper'>
                    <a href="/courses">Courses</a>
                    <a href="/career">Career</a>
                    <a href="/degree">Degrees</a> 
                </div> 
        </nav>
    );
};

export default Header;