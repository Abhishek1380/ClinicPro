import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-section contact">
                        <h3>Contact Us</h3>
                        <div className="contact-info">
                            <p><i className="fas fa-phone-alt"></i> <a href="tel:+919766830294">+91 9766830294</a></p>
                            <p><i className="fas fa-map-marker-alt"></i> Shop no 20, Sukhwani Heritage, Chikhali Akurdi Rd, near Bhalerao ENT hospital, panchatara Nagar, Bijali Nagar, Ganga Nagar, Akurdi, Pune, Pimpri-Chinchwad, Maharashtra 411035</p>
                        </div>
                        <div className="social-links">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://wa.me/919766830294" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section quick-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/aboutme"><i className="fas fa-chevron-right"></i> About Me</Link></li>
                            <li><Link to="/blogs"><i className="fas fa-chevron-right"></i> Health Blog</Link></li>
                            <li><Link to="/treatment"><i className="fas fa-chevron-right"></i> Treatments</Link></li>
                            <li><Link to="/contact"><i className="fas fa-chevron-right"></i> Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section treatments">
                        <h3>Our Treatments</h3>
                        <ul>
                            <li><Link to="/treatment/1"><i className="fas fa-stethoscope"></i> GERD Homeopathy Treatment</Link></li>
                            <li><Link to="/treatment/2"><i className="fas fa-stethoscope"></i> Homeopathy for PCOS</Link></li>
                            <li><Link to="/treatment/3"><i className="fas fa-stethoscope"></i> Homeopathy for Thyroid</Link></li>
                            <li><Link to="/treatment/4"><i className="fas fa-stethoscope"></i> Homeopathy for Diabetes</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Kshitij Homeopathic Clinic. All Rights Reserved.</p>
                    <div className="legal-links">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;