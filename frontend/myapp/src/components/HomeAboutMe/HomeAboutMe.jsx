import React from 'react';
import './HomeAboutMe.css';

const HomeAboutMe = () => {
    return (
        <section className="section_container about_container">
            <div className="about_content">
                <h2 className="section_header">About Dr. Satish Nichit</h2>
                <p>
                    Dr. Satish is a highly experienced homeopathic doctor with 13 years of expertise in treating various health
                    conditions. With a deep passion for healing, he has built a reputation for providing personalized and effective
                    treatments. His clinic in Akurdi is well-known for its compassionate care and dedication to patient well-being.
                </p>
                <p>
                    With extensive experience in the field of homeopathy, Dr. Satish is committed to delivering holistic treatment
                    options tailored to each patient’s needs. He blends modern medical knowledge with traditional homeopathic
                    practices to ensure comprehensive care. His clinic offers a peaceful environment, prioritizing patient comfort
                    and trust.
                </p>
                <a href="about-dr-satish.html" className="read-more">
                    Read more
                </a>
            </div>
            <div className="about_image">
                <img
                    src="https://i.ibb.co/thbYYBk/doccccc.jpg"
                    alt="Dr. Satish Nichit"
                />
            </div>
        </section>
    );
};

export default HomeAboutMe;
