import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [activeLink, setActiveLink] = useState('/');
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
        setActiveLink(location.pathname);
    }, [location]);

    return (
        <div className="navbar">
            <nav className="navbar fixed-top" style={{ padding: '10px 20px' }}>
                <div className="logo">
                    <img src="https://i.ibb.co/kDFGgD7/San.png" alt="Logo" />
                </div>
                <ul className={`nav-links ${isMenuActive ? 'active' : ''}`}>
                    <li>
                        <Link
                            to="/"
                            className={`font-color ${activeLink === '/' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/')}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/treatment"
                            className={`font-color ${activeLink === '/treatment' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/treatment')}
                        >
                            Treatments
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/blog"
                            className={`font-color ${activeLink === '/blog' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/blog')}
                        >
                            Health Blogs
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/aboutme"
                            className={`font-color ${activeLink === '/aboutme' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/aboutme')}
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/gallery"
                            className={`font-color ${activeLink === '/gallery' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/gallery')}
                        >
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/bookappointment"
                            className={`font-color special_btnn btn-outline-success ${activeLink === '/bookappointment' ? 'active' : ''}`}
                            style={{
                                borderRadius: '7px',
                                backgroundColor: '#0176c4',
                                color: 'white',
                                fontWeight: 'bold',
                                marginLeft: '5px',
                            }}
                            onClick={() => handleLinkClick('/bookappointment')}
                        >
                            Book Appointment
                        </Link>
                    </li>
                </ul>
                <div className="controls">
                    <div className="hamburger" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>

            <div className="contact-banner">
                <div className="contact-content">
                    <a href="tel:+919876543210" className="contact-link">📞+9766830294</a>
                    <span className="contact-divider">|</span>
                    <a href="mailto:clinic@example.com" className="contact-link">undeabhishek91@gmail.com</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
