import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import unnamedImg from '../../assets/unnamed.jpg';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleGetDirection = () => {
        window.open(
            "https://www.google.com/maps/dir/?api=1&destination=Kshitij+homoeopathic+clinic,+Pune,+India",
            "_blank"
        );
    };

    return (
        <div className={`landing-container ${isVisible ? 'visible' : ''}`}>

            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="hero-title">
                                Kshitij <span className="highlight">Homeopathy</span> Clinic
                            </h1>
                            <p className="hero-subtitle">
                                Healing with Care, Trusted for <strong>14+ Years</strong>
                            </p>
                            <p className="hero-description">
                                Experience holistic healing with Dr. Satish Nichit - serving the Akurdi community
                                with proven homeopathic treatments and compassionate care.
                            </p>

                            <div className="hero-stats">
                                <div className="stat">
                                    <div className="stat-number">14+</div>
                                    <div className="stat-label">Years Experience</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-number">5000+</div>
                                    <div className="stat-label">Patients Treated</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-number">98%</div>
                                    <div className="stat-label">Success Rate</div>
                                </div>
                            </div>

                            <div className="hero-actions">
                                <a
                                    href="https://www.practo.com/pune/clinic/kshitij-homoeopathic-clinic-akurdi"
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fas fa-calendar-check"></i>
                                    Book Appointment
                                </a>
                                <button
                                    className="btn btn-secondary"
                                    onClick={handleGetDirection}
                                >
                                    <i className="fas fa-map-marker-alt"></i>
                                    Get Directions
                                </button>
                                <Link
                                    to="/aboutme"
                                    className="btn btn-outline"
                                >
                                    <i className="fas fa-user-md"></i>
                                    Meet Dr. Nichit
                                </Link>
                            </div>
                        </div>

                        <div className="hero-image">
                            <div className="image-frame">
                                <img src={unnamedImg} alt="Kshitij Clinic" />
                                <div className="image-badge">
                                    <div className="badge-content">
                                        <span className="badge-text">Trusted Since</span>
                                        <span className="badge-year">2010</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="features-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Why Choose Kshitij Homeopathy?</h2>
                        <p>Experience the difference with our patient-centered approach</p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🏥</div>
                            <h3>14+ Years Experience</h3>
                            <p>Trusted homeopathic care with over a decade of successful practice in Akurdi</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">👨‍⚕️</div>
                            <h3>Expert Practitioner</h3>
                            <p>Dr. Satish Nichit provides personalized treatment plans tailored to your needs</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">⭐</div>
                            <h3>Proven Results</h3>
                            <p>Thousands of patients successfully treated with holistic homeopathic care</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">💊</div>
                            <h3>Holistic Approach</h3>
                            <p>Treating root causes, not just symptoms, for long-term wellness</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Start Your Healing Journey Today</h2>
                        <p>Take the first step towards better health with personalized homeopathic care</p>
                        <div className="cta-actions">
                            <a
                                href="https://www.practo.com/pune/clinic/kshitij-homoeopathic-clinic-akurdi"
                                className="btn btn-primary btn-large"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fas fa-phone-alt"></i>
                                Book Your Appointment
                            </a>
                            <button
                                className="btn btn-outline btn-large"
                                onClick={handleGetDirection}
                            >
                                <i className="fas fa-directions"></i>
                                Visit Our Clinic
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
