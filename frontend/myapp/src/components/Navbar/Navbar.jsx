import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [activeLink, setActiveLink] = useState("/"); // Track the active link
    const location = useLocation(); // Hook to get the current route

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    // Toggle menu state
    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    // Handle active link and close the menu when a link is clicked
    const handleLinkClick = (link) => {
        setActiveLink(link); // Set the clicked link as active
        setIsMenuActive(false); // Close the menu after clicking a link (on mobile)
        window.scrollTo(0, 0); // Ensure content starts from the top after navigating
    };

    // Close the menu when the route changes
    useEffect(() => {
        setIsMenuActive(false); // Close hamburger menu on route change
    }, [location]); // Trigger when the location changes

    return (
        <div className="navbar">
            <nav className="navbar fixed-top">
                <div className="logo">
                    <div className="circle-logo" style={{ backgroundColor: "rgb(32 148 49);" }}>SN</div>
                    <span>Dr. Satish Nichit</span>
                </div>
                <ul className={`nav-links ${isMenuActive ? 'active' : ''}`}>
                    <li>
                        <Link
                            to="/"
                            className={`font-color ${activeLink === '/' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/')}
                            key="/" // Ensure re-render on link click
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/treatment"
                            className={`font-color ${activeLink === '/treatment' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/treatment')}
                            key="/treatment" // Ensure re-render on link click
                        >
                            Treatments
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/blogs"
                            className={`font-color ${activeLink === '/blogs' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/blogs')}
                            key="/blogs" // Ensure re-render on link click
                        >
                            Health Blogs
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/aboutme"
                            className={`font-color ${activeLink === '/aboutme' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/aboutme')}
                            key="/aboutme" // Ensure re-render on link click
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
                            key="/bookappointment" // Ensure re-render on link click
                        >
                            Book Appointment
                        </Link>
                    </li>
                </ul>

                <div className="controls">
                    <button className="btn btn-outline-secondary my-2 my-sm-0 disabled" type="button" onClick={toggleDarkMode}>
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
