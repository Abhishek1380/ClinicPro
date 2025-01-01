import React, { useState } from 'react';
import './Navbar1.css';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const toggleMenu = () => setIsMenuActive(!isMenuActive);

    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    return (
        <div className="navbar">
            <nav className="nav fixed-top">
                <div className="logo">
                    <div className="circle-logo">SN</div>
                    <span>Dr. Satish Nichit</span>
                </div>
                <ul className={`nav-links ${isMenuActive ? 'active' : ''}`}>
                    <li><Link to="/" className='font-color'>Home</Link></li>
                    <li><Link to="/treatment" className='font-color'>Treatments</Link></li>
                    <li><Link to="/blogs" className='font-color'>Health Blogs</Link></li>
                    <li><Link to="/aboutme" className='font-color'>About Me</Link></li>
                    <li><Link to="/bookappointment" className='font-color special_btn btn-outline-success' style={{ borderRadius: "7px" }}>Book Appointment</Link></li>
                </ul>
                <div className="controls">
                    <button
                        className="btn btn-outline-secondary my-2 my-sm-0"
                        type="button"
                        onClick={toggleDarkMode}
                        aria-label="Toggle dark mode">
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                    <div
                        className="hamburger"
                        onClick={toggleMenu}
                        aria-label="Toggle menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar1;
