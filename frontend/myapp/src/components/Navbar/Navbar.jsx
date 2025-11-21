import React, { useState, useEffect } from 'react';
import '../Navbar/Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [activeLink, setActiveLink] = useState('/');
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

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

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
                {/* Top Contact Banner */}


                {/* Main Navigation */}
                <nav className="navbar">
                    <div className="logo">
                        <img src="https://i.ibb.co/kDFGgD7/San.png" alt="Clinic Logo" />
                    </div>

                    <ul className={`nav-links ${isMenuActive ? 'active' : ''}`}>
                        <li>
                            <Link
                                to="/"
                                className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('/')}
                            >
                                <i className="ri-home-4-line"></i> Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/treatment"
                                className={`nav-link ${activeLink === '/treatment' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('/treatment')}
                            >
                                <i className="ri-heart-pulse-line"></i> Treatments
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blog"
                                className={`nav-link ${activeLink === '/blog' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('/blog')}
                            >
                                <i className="ri-article-line"></i> Health Blogs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/aboutme"
                                className={`nav-link ${activeLink === '/aboutme' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('/aboutme')}
                            >
                                <i className="ri-information-line"></i> About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/gallery"
                                className={`nav-link ${activeLink === '/gallery' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('/gallery')}
                            >
                                <i className="ri-gallery-line"></i> Gallery
                            </Link>
                        </li>
                        <li className="appointment-link">
                            <Link
                                to="/bookappointment"
                                className="appointment-btn"
                                onClick={() => handleLinkClick('/bookappointment')}
                            >
                                <i className="ri-calendar-check-line"></i> Book Appointment
                            </Link>
                        </li>
                    </ul>

                    <div className={`hamburger ${isMenuActive ? 'active' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
                {/* <div className="contact-banner">
                    <div className="contact-content">
                        <a href="tel:9766830294" className="contact-link">
                            <i className="ri-phone-fill"></i> Talk to Doctor
                        </a>
                        <span className="contact-divider"></span>
                        <a href="mailto:undeabhishek91@gmail.com" className="contact-link">
                            <i className="ri-mail-fill"></i> Email Us Your Concern
                        </a>
                    </div>
                </div> */}
            </header>
        </>
    );
};

export default Navbar;