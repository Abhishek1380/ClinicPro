import React from 'react';
import './Why.css';


const Why = () => {


    return (
        <section class="section_container why_container">
            <div class="why_image">
                <img src="https://i.ibb.co/thbYYBk/doccccc.jpg" alt="beautiful-young-female-doctor-looking-camera-office-1301-7807" border="0" />
            </div>
            <div class="why_flex">
                <div class="why_content">
                    <h2 class="section_header">Why Choose Us</h2>
                    <p>Choose us for personalized, natural, and effective homeopathic treatments delivered by experienced practitioners who prioritize your wellness and long-term health.</p>
                </div>
                <div class="why_grid">
                    <div class="why_grid_container">
                        <span><i class="ri-hand-heart-line"></i></span>
                        <div>
                            <h4>Personalized Care</h4>
                            <p>
                                Tailored treatments focused on individual needs, ensuring effective and holistic healing.
                            </p>
                        </div>
                    </div>
                    <div class="why_grid_container">
                        <span><i class="ri-truck-line"></i></span>
                        <div>
                            <h4>Natural Remedies</h4>
                            <p>
                                Safe, chemical-free solutions promoting overall wellness and boosting immunity naturally.


                            </p>
                        </div>
                    </div>
                    <div class="why_grid_container">
                        <span><i class="ri-hospital-line"></i></span>
                        <div>
                            <h4>Experienced Practitioner</h4>
                            <p>
                                Trusted professionals dedicated to providing compassionate and expert homeopathic care.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Why;
