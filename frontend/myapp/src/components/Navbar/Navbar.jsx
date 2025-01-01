import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    return (
        <div className="navbar">
            <nav className="navbar fixed-top">

                <div className="logo">
                    <div className="circle-logo">SN</div>
                    <span>Dr. Satish Nichit</span>
                </div>
                <ul className={`nav-links ${isMenuActive ? 'active' : ''}`}>
                    <li><Link to="/" className='font-color'>Home</Link></li>
                    <li><Link to="/treatment" className='font-color'>Treatments</Link></li>
                    <li><Link to="/blogs" className='font-color'>Health Blogs</Link></li>
                    <li><Link to="/aboutme" className='font-color'>About Us</Link></li>
                    <li><Link to="/bookappointment" className='font-color special_btn btn-outline-success ' style={{ borderRadius: "7px", backgroundColor: "#0176c4", color: "white", fontWeight: "bold" }}>Book Appointment</Link></li>
                </ul>

                <div className="controls">
                    <button className="btn btn-outline-secondary my-2 my-sm-0" type="button" onClick={toggleDarkMode}>
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                    <div className="hamburger" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
