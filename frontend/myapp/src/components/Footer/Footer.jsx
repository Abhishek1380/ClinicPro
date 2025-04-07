import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section contact">
                    <h3>Contact Us :</h3>
                    <p> <i class="fa-solid fa-phone" style={{ paddingRight: "auto 5px" }}></i> Phone: <a href="tel:+919403530005">9766830294</a></p>
                    <p>Address: Shop no 20, Sukhwani Heritage, Chikhali Akurdi Rd, near Bhalerao ENT hospital, panchatara Nagar, Bijali Nagar, Ganga Nagar, Akurdi, Pune, Pimpri-Chinchwad, Maharashtra 411035</p>
                    <div className="social-links">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> <i class="fa-brands fa-instagram"></i> Instagram</a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> <i class="fa-brands fa-facebook" style={{ paddingRight: "auto 5px" }}></i>Facebook</a>
                    </div>
                </div>

                <div className="footer-section quick-links">
                    <h3>Quick Links :</h3>
                    <ul>
                        <li><Link to="/aboutme">About Me</Link></li>
                        <li><Link to="/blogs">Health Blog</Link></li>
                        <li><Link to="/treatment">Treatments</Link></li>
                        {/* <li><Link to="#privacy-policy">Privacy Policy</Link></li> */}
                    </ul>
                </div>

                <div className="footer-section treatments">
                    <h3>Our Treatments :</h3>
                    <ul>
                        <li>< Link to="/treatment/1">GERD Homeopathy Treatment</Link></li>
                        <li><Link to="/treatment/2">Homeopathy for PCOS</Link></li>
                        <li><Link to="/treatment/3">Homeopathy for Thyroid</Link></li>
                        <li><Link to="/treatment/4">Homeopathy for Diabetes</Link></li>
                        <li><Link to="/treatment/5">Homeopathy for Kidney Stones</Link></li>
                        <li><Link to="/treatment/6">Homeopathy for High Blood Pressure</Link></li>
                        <li><Link to="/treatment/7">Homeopathy for Asthma</Link></li>
                        <li><Link to="/treatment/8">Homeopathy for UTI</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
