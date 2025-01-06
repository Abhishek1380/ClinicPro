import React from 'react';
import './Services.css';


const Services = () => {


    return (
        <section className="section_container service_container">
            <div className="service_header">
                <div className="service_header_content">
                    <h2 className="section_header">Our Special Services</h2>
                    <p>Homeopathy small clinics offer personalized consultations, natural remedies, and holistic treatment
                        for various conditions, including allergies, skin issues, digestive problems, and stress. Services
                        include homeopathic medicines and lifestyle advice tailored to individual needs for gentle,
                        effective healing.</p>
                </div>
                {/* <button className="service_btn">Our Services</button> */}
            </div>
            <div className="service_grid">
                <div className="service_card">
                    <span><i className="ri-microscope-line"></i></span>
                    <h4>Stress and Anxiety Support</h4>
                    <p>Natural treatments to balance emotions, reduce stress, and improve sleep patterns for mental and
                        emotional well-being.
                    </p>
                    <a href="#">Learn More</a>

                </div>
                <div className="service_card">
                    <span><i className="ri-mental-health-line"></i></span>
                    <h4>Immunity Boost</h4>
                    <p> Holistic solutions to strengthen the immune system, prevent recurrent infections, and support
                        overall health naturally.
                    </p>
                    <a href="#">Learn More</a>

                </div>
                <div className="service_card">
                    <span><i className="ri-hospital-line"></i></span>
                    <h4>Chronic Condition Care:</h4>
                    <p> Gentle, personalized homeopathic remedies for allergies, arthritis, and asthma, focusing on
                        long-term relief and overall wellness.
                    </p>
                    <a href="#">Learn More</a>

                </div>
            </div>
        </section>
    );
};

export default Services;
