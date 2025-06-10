import React from 'react';
import './ContactBanner.css';

const ContactBanner = () => {
    return (
        <div className="contact-banner">
            <div className="contact-content">
                <a href="tel:9766830294" className="contact-link">📞9766830294</a>
                <span className="contact-divider">|</span>
                <a href="mailto:clinic@example.com" className="contact-link">✉️ undeabhishek91@gmail.com</a>
            </div>
        </div>
    );
};

export default ContactBanner;
