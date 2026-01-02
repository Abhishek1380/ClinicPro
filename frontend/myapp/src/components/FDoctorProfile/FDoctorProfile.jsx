import React from 'react';
import './FDoctorProfile.css';

const FDoctorProfile = () => {
    return (
        <div className="doctor-profile-container">
            <div className="doctor-image-section">
                <div className="doctor-image-wrapper">
                    <img
                        src="https://i.ibb.co/218z4tmY/Sarika-Nichit.jpg"
                        alt="Dr. Sarika Belote-Nichit"
                        className="doctor-image"
                    />
                    <div className="image-overlay">
                        <span className="overlay-text">Homeopathic Consultant</span>
                    </div>
                </div>

                <div className="contact-info">
                    <div className="clinic-badge">
                        <i className="fas fa-hospital"></i>
                        <h3>Kshitij Homeopathic Clinic</h3>
                    </div>
                    <p className="clinic-location">
                        <i className="fas fa-map-marker-alt"></i> Akurdi, Pune
                    </p>
                </div>
            </div>

            <div className="doctor-details-section">
                <div className="doctor-header">
                    <div className="name-title">
                        <h1>Dr. Sarika Belote-Nichit</h1>
                        <div className="qualification-tags">
                            <span className="tag">B.H.M.S</span>
                            <span className="tag">P.G.D.E.M.S</span>
                        </div>
                    </div>

                </div>

                <div className="details-content">
                    <div className="education-section">
                        <h2 className="section-title">
                            <i className="fas fa-university"></i> Education
                        </h2>
                        <div className="education-item">
                            <h3>Bachelor of Homeopathic Medicine & Surgery (B.H.M.S)</h3>
                            <p className="institution">Dhandu Mama Sathe Homeopathic Medical College, Pune</p>
                        </div>
                        <div className="education-item">
                            <h3>Post Graduate Diploma in Emergency Medical Services (P.G.D.E.M.S)</h3>
                            <p className="institution">Ruby Hall Clinic, Pune</p>
                            <p className="special-note">Trained in Emergency Services & Female Health Problems</p>
                        </div>
                    </div>

                    <div className="specialization-section">
                        <h2 className="section-title">
                            <i className="fas fa-heartbeat"></i> Specialization
                        </h2>
                        <div className="specialization-grid">
                            <div className="specialty-card">
                                <i className="fas fa-female"></i>
                                <h4>Female Health</h4>
                                <p>Specialized in female health problems and hormonal disorders</p>
                            </div>
                            <div className="specialty-card">
                                <i className="fas fa-ambulance"></i>
                                <h4>Emergency Care</h4>
                                <p>Trained in emergency homeopathic medical services</p>
                            </div>
                        </div>
                    </div>

                    <div className="memberships-section">
                        <h2 className="section-title">
                            <i className="fas fa-id-card"></i> Professional Memberships
                        </h2>
                        <div className="membership-grid">
                            <div className="membership-card">
                                <div className="membership-icon">
                                    <i className="fas fa-handshake"></i>
                                </div>
                                <div className="membership-details">
                                    <h4>Indian Homeopathic Association</h4>
                                    <p>National Level Membership</p>
                                </div>
                            </div>

                            <div className="membership-card">
                                <div className="membership-icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <div className="membership-details">
                                    <h4>Vital Homeopathic Forum</h4>
                                    <p>Professional Network</p>
                                </div>
                            </div>

                            <div className="membership-card">
                                <div className="membership-icon">
                                    <i className="fas fa-landmark"></i>
                                </div>
                                <div className="membership-details">
                                    <h4>Central Council of Homeopathy</h4>
                                    <p>National Regulatory Body</p>
                                </div>
                            </div>

                            <div className="membership-card">
                                <div className="membership-icon">
                                    <i className="fas fa-building"></i>
                                </div>
                                <div className="membership-details">
                                    <h4>Maharashtra Council of Homeopathy</h4>
                                    <p>State Regulatory Body</p>
                                </div>
                            </div>

                            <div className="membership-card">
                                <div className="membership-icon">
                                    <i className="fas fa-stethoscope"></i>
                                </div>
                                <div className="membership-details">
                                    <h4>Pimpri Chinchwad Doctor Association</h4>
                                    <p>Local Medical Association</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FDoctorProfile;