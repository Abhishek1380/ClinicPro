import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Review.css";

const GoogleReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get('https://backend-clinic-website.onrender.com/reviews')
            .then(response => {
                setReviews(response.data);
            })
            .catch(error => {
                console.error('Error fetching reviews:', error);
            });
    }, []);

    return (
        <>
            <div className="containerr component_margin">
                <div className="container_left">
                    <h1>Read what our customers love about us</h1>
                    <p>Our customers love the natural, effective solutions we provide. With personalized care and proven results, they trust us for their holistic health and wellness needs.</p>
                    <p>Customers trust our natural remedies for effective, personalized, and holistic health solutions.</p>
                    <button>Read our success stories</button>
                </div>
                <div className="container_right">
                    {/* Dynamic rendering of reviews */}
                    {reviews.map(review => (
                        <div className="card" key={review._id}>
                            <img src={review.profile_photo_url} alt={review.author_name} />
                            <div className="card_content">

                                <div className="card_details">
                                    <span><i className="ri-double-quotes-l"></i></span>
                                    <p>{review.text}</p>
                                    <span><i className="ri-double-quotes-r"></i></span>
                                    {/* Author Name and Link */}
                                    <h4>
                                        <a href={review.author_url} target="_blank" rel="noopener noreferrer">
                                            {review.author_name}
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default GoogleReviews;
