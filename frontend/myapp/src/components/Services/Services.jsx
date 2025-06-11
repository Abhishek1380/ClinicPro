import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: 'ri-brain-line',
            title: 'Stress & Anxiety Relief',
            description: 'Gentle homeopathic remedies to calm the mind, reduce stress hormones, and promote restful sleep without side effects.'
        },
        {
            icon: 'ri-shield-star-line',
            title: 'Immune System Boost',
            description: 'Natural formulations to strengthen your body\'s defenses against infections and seasonal illnesses.'
        },
        {
            icon: 'ri-heart-pulse-line',
            title: 'Chronic Condition Care',
            description: 'Personalized treatment plans for allergies, arthritis, and respiratory conditions focusing on root causes.'
        },
        {
            icon: 'ri-stethoscope-line',
            title: 'Pediatric Homeopathy',
            description: 'Safe, gentle treatments for childhood ailments like colic, teething pain, and recurrent infections.'
        },
        {
            icon: 'ri-women-line',
            title: 'Women\'s Wellness',
            description: 'Hormonal balance support for menstrual issues, menopause symptoms, and fertility concerns.'
        },
        {
            icon: 'ri-mental-health-line',
            title: 'Digestive Health',
            description: 'Natural solutions for IBS, acid reflux, bloating and other gastrointestinal disorders.'
        }
    ];

    return (
        <section className="services-section" id="services">
            <div className="services-container">
                <div className="section-header">
                    <h2 className="section-title">Our Holistic Services</h2>
                    <p className="section-subtitle">
                        Homeopathy offers a gentle yet effective approach to healing that works with your body's natural
                        processes. Each treatment is carefully selected to match your unique symptoms and constitution.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="card-icon">
                                <i className={service.icon}></i>
                            </div>
                            <h3 className="card-title">{service.title}</h3>
                            <p className="card-description">{service.description}</p>
                            <div className="card-hover-content">
                                <button className="consult-btn">Learn More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;