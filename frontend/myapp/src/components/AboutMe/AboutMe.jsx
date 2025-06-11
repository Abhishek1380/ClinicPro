import React from 'react';
import { FaUserMd, FaGraduationCap, FaBriefcase, FaQuoteLeft } from 'react-icons/fa';
import './AboutMe.css';

const AboutMe = () => {
    const doctorInfo = {
        name: "Dr. Satish Nichit, MD Homeopathy",
        biography: "Kshitij Homoeopathic Clinic was established in 2011. Since then, we have been treating patients through a holistic approach. Our chief objective is to provide quick and effective treatment. We believe the mind and body are connected—so when a person suffers from disease, there is a disturbance in both body and mental levels. We conduct a detailed and careful study of the patient’s emotional, stress, and physical complaints before prescribing constitutional medicine and conducting follow-ups. We have successfully treated more than 20,000 patients using homeopathy. We also run awareness programs and free health check-up camps for the needy. From common cold (coryza) to cancer, we offer treatment for a wide range of diseases. Our motto is to heal with homeopathy. Patient testimonials on platforms like Google show the trust and success we’ve earned over time.",
        education: [
            "MD Homeopathy",
            "BHMS (Bachelor of Homeopathic Medicine & Surgery)"
        ],
        experience: "14+ years of clinical practice",
        specializations: [
            "Chronic Disease Management",
            "Pediatric Homeopathy",
            "Autoimmune Disorders",
            "Mental Health Conditions"
        ]
    };

    const images = [
        "https://i.ibb.co/thbYYBk/doccccc.jpg",
        "https://i.ibb.co/RHbN5Ch/images.jpg"
    ];

    const [activeImageIndex, setActiveImageIndex] = React.useState(0);

    const nextImage = () => {
        setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setActiveImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <section className="am-container">
            <div className="am-header">
                <h1 className="am-title">
                    <span className="am-icon"><FaUserMd /></span>
                    About Dr. Satish Nichit
                </h1>
                <p className="am-subtitle">Meet our experienced homeopathic specialist</p>
            </div>

            <div className="am-content">
                <div className="am-image-container">
                    <div className="am-image-wrapper">
                        <img
                            src={images[activeImageIndex]}
                            alt="Dr. Satish Nichit"
                            className="am-doctor-image"
                        />
                        <div className="am-image-nav">
                            <button className="am-nav-button" onClick={prevImage}>
                                &lt;
                            </button>
                            <div className="am-dots">
                                {images.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`am-dot ${index === activeImageIndex ? 'active' : ''}`}
                                        onClick={() => setActiveImageIndex(index)}
                                    />
                                ))}
                            </div>
                            <button className="am-nav-button" onClick={nextImage}>
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>

                <div className="am-details">
                    <div className="am-detail-card">
                        <h3 className="am-detail-title">
                            <FaUserMd className="am-detail-icon" />
                            Biography
                        </h3>
                        <p className="am-detail-text">{doctorInfo.biography}</p>
                    </div>

                    <div className="am-detail-card">
                        <h3 className="am-detail-title">
                            <FaGraduationCap className="am-detail-icon" />
                            Education & Qualifications
                        </h3>
                        <ul className="am-detail-list">
                            {doctorInfo.education.map((item, index) => (
                                <li key={index} className="am-detail-item">{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="am-detail-card">
                        <h3 className="am-detail-title">
                            <FaBriefcase className="am-detail-icon" />
                            Experience & Specializations
                        </h3>
                        <p className="am-detail-text">{doctorInfo.experience}</p>
                        <div className="am-specializations">
                            {doctorInfo.specializations.map((spec, index) => (
                                <span key={index} className="am-specialization">{spec}</span>
                            ))}
                        </div>
                    </div>

                    <div className="am-quote-card">
                        <FaQuoteLeft className="am-quote-icon" />
                        <p className="am-quote-text">
                            "Homeopathy cures a larger percentage of cases than any other method of treatment
                            and is beyond doubt safer and more economical."
                        </p>
                        <p className="am-quote-author">- Mahatma Gandhi</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
