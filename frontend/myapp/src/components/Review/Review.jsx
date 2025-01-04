

import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Review.css";

const GoogleReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:5000/reviews')
            .then(response => {
                setReviews(response.data);
            })
            .catch(error => {
                console.error('Error fetching treatments:', error);
            });
    }, []);

    return (
        <>
            <div class="containerr component_margin">
                <div class="container_left">
                    <h1>Read what out customers love about us</h1>
                    <p>Our customers love the natural, effective solutions we provide. With personalized care and proven results, they trust us for their holistic health and wellness needs.
                    </p>
                    <p>Customers trust our natural remedies for effective, personalized, and holistic health solutions.</p>
                    <button>Read our success stories</button>
                </div>
                <div class="container_right">

                    <div class="card">
                        <img src="https://i.ibb.co/tBt0wHY/patient-1.jpg" alt="" />
                        <div class="card_content">
                            <span><i class="ri-double-quotes-l"></i></span>
                            <div class="card_details">
                                <p>
                                    Dr. Satish's homeopathic treatments have been life-changing! His personalized care and attention have greatly improved my health. Highly recommended!
                                </p>
                                <span><i class="ri-double-quotes-r"></i></span>
                                <h4>Young chung</h4>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://i.ibb.co/y5QDPjv/patient-2.jpg" alt="" />
                        <div class="card_content">
                            <span><i class="ri-double-quotes-l"></i></span>
                            <div class="card_details">
                                <p>
                                    I’ve experienced significant relief after visiting Dr. Satish's clinic. His expertise in homeopathy and holistic healing is truly remarkable. Truly a healing touch!
                                </p>
                                <span><i class="ri-double-quotes-r"></i></span>
                                <h4>Sharad Rupnur</h4>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://i.ibb.co/c3Z3Mnb/patient-3.jpg" alt="" />
                        <div class="card_content">
                            <span><i class="ri-double-quotes-l"></i></span>
                            <div class="card_details">
                                <p>
                                    Excellent care at Dr. Satish’s clinic! The treatments are effective, and the staff is supportive. My health has improved tremendously. Very satisfied
                                </p>
                                <span><i class="ri-double-quotes-r"></i></span>
                                <h4>Riddi kule</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    );
};

export default GoogleReviews;


