import React from 'react';
import logo from '../../images/logo.png.png'
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar'>
           <div className='nav-wrapper'>
           <img src={logo} alt="" />
              <div className='menu-wrapper'>
                    <a href="/courses">Courses</a>
                    <a href="/career">Find Your New Career</a>
                    <a href="/degree">Programs & Degrees</a> 
                </div>
            </div> 
        </nav>
    );
};

export default Header;