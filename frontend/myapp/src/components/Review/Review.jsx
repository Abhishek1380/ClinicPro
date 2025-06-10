import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Review.css";

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios
            .get("https://backend-clinic-website.onrender.com/reviews")
            .then((response) => {
                setReviews(response.data);
            })
            .catch((error) => {
                console.error("Error fetching reviews:", error);
            });
    }, []);

    return (
        <section className="gr-section">
            <div className="gr-header">
                <h2 className="gr-title">Real People. Real Transformations.</h2>
                <p className="gr-subtitle">
                    Here’s what our community says. Trusted by hundreds for genuine results.
                </p>
                <button className="gr-cta">View All on Google</button>
            </div>

            <div className="gr-carousel">
                {reviews.map((review) => (
                    <div className="gr-card" key={review._id}>
                        <div className="gr-profile">
                            <img
                                src={review.profile_photo_url}
                                alt={review.author_name}
                                className="gr-avatar"
                            />
                            <div className="gr-meta">
                                <h4 className="gr-author">
                                    <a
                                        href={review.author_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="gr-author-link"
                                    >
                                        {review.author_name}
                                    </a>
                                </h4>
                                <span className="gr-stars">★★★★★</span>
                            </div>
                        </div>
                        <div className="gr-text-scroll">
                            <p className="gr-text">“{review.text}”</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Review;
