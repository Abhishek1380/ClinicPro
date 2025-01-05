import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [activeLink, setActiveLink] = useState("/");
    const location = useLocation();

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsMenuActive(false);
        window.scrollTo(0, 0);
    };


    useEffect(() => {
        setIsMenuActive(false);
    }, [location]);

    return (
        <div className="navbar">
            <nav className="navbar fixed-top" style={{ padding: "10 20px" }}>
                <div className="logo">
                    <img src="https://i.ibb.co/kDFGgD7/San.png" alt="" />
                </div>
                <ul className={`nav-links ${isMenuActive ? 'active' : ''}`}>
                    <li>
                        <Link
                            to="/"
                            className={`font-color ${activeLink === '/' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/')}
                            key="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/treatment"
                            className={`font-color ${activeLink === '/treatment' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/treatment')}
                            key="/treatment"
                        >
                            Treatments
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/blogs"
                            className={`font-color ${activeLink === '/blogs' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/blogs')}
                            key="/blogs"
                        >
                            Health Blogs
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/aboutme"
                            className={`font-color ${activeLink === '/aboutme' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/aboutme')}
                            key="/aboutme"
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/bookappointment"
                            className={`font-color special_btn btn-outline-success ${activeLink === '/bookappointment' ? 'active' : ''}`}
                            style={{ borderRadius: "7px", backgroundColor: "#0176c4", color: "white", fontWeight: "bold", background: " rgb(32 148 49)" }}
                            onClick={() => handleLinkClick('/bookappointment')}
                            key="/bookappointment"
                        >
                            Book Appointment
                        </Link>
                    </li>
                </ul>

                <div className="controls">
                    {/* <button className="btn btn-outline-secondary my-2 my-sm-0 disabled" type="button" onClick={toggleDarkMode}>
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button> */}
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
