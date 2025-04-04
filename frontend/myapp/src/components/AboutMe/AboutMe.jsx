import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="container my-6">
            <h5 className='Page_title text center m' style={{ marginLeft: "-52%" }}><span><i class="ri-hospital-line"></i><i class="ri-arrow-right-s-line"></i></span> About us</h5>
            <div id="aboutMeCarousel" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#aboutMeCarousel"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#aboutMeCarousel"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                </div>


                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <div className="about-me-section">
                            <div className="doctor-photo text-center mb-41">
                                <img
                                    src="https://i.ibb.co/thbYYBk/doccccc.jpg"
                                    alt="Doctor"
                                    className="d-block mx-auto"
                                />
                            </div>
                            <div className="doctor-details">
                                <div className="detail-item mb-4">
                                    <h4 className="text-primaryy">Name</h4>
                                    <p>Dr. Satish Nichit, MD Homeopathy.</p>
                                </div>
                                <div className="detail-item mb-4">
                                    <h4 className="text-primaryy">Biography</h4>
                                    <p>
                                        Dr. Satish Nichit is a Homoeopath in Akurdi, Pune and has an experience of 14 years in this field.
                                        Dr. Satish Nichit practices at Kshitij Homoeopathic Clinic in Akurdi, Pune.
                                    </p>
                                </div>
                                <div className="detail-item mb-4">
                                    <h4 className="text-primaryy">Education</h4>
                                    <p>
                                        MD Homeopathy<br />

                                    </p>
                                </div>
                                <div className="detail-item">
                                    <h4 className="text-primaryy">Experience</h4>
                                    <p>14+ years</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="carousel-item">
                        <div className="about-me-section">
                            <div className="doctor-photo text-center mb-41">
                                <img
                                    src="https://i.ibb.co/RHbN5Ch/images.jpg"
                                    alt="Doctor"
                                    className="d-block mx-auto"
                                />
                            </div>
                            <div className="doctor-details">
                                <div className="detail-item mb-4">
                                    <h4 className="text-primaryy">Name</h4>
                                    <p>Dr. Satish Nichit, MD Homeopathy.</p>
                                </div>
                                <div className="detail-item mb-4">
                                    <h4 className="text-primaryy">Biography</h4>
                                    <p>
                                        Dr. Satish Nichit is a Homoeopath in Akurdi, Pune and has an experience of 14 years in this field.
                                        Dr. Satish Nichit practices at Kshitij Homoeopathic Clinic in Akurdi, Pune.
                                    </p>
                                </div>
                                <div className="detail-item mb-4">
                                    <h4 className="text-primaryy">Education</h4>
                                    <p>
                                        MD Homeopathy<br />
                                        <br />
                                       
                                    </p>
                                </div>
                                <div className="detail-item">
                                    <h4 className="text-primaryy">Experience</h4>
                                    <p>14+ years</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#aboutMeCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#aboutMeCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default AboutMe;
