// import React from 'react';
// import './Review.css';

// const Review = () => {
//     return (
//         <div className="container-fluid bg-body-tertiary py-3" style={{ width: "35%" }}>
//             <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
//                 <div className="carousel-inner">
//                     <div className="carousel-item active">
//                         <div className="card shadow-sm rounded-3">
//                             <div className="quotes display-2 text-body-tertiary">
//                                 <i className="bi bi-quote"></i>
//                             </div>
//                             <div className="card-body">
//                                 <p className="card-text">
//                                     "Some quick example text to build on the card title and make up the bulk of
//                                     the card's content."
//                                 </p>
//                                 <div className="d-flex align-items-center pt-2">
//                                     <img
//                                         src="https://codingyaar.com/wp-content/uploads/square-headshot-1.png"
//                                         alt="Testimonial 1"
//                                         className="rounded-circle me-3"
//                                         style={{ width: '50px', height: '50px' }}
//                                     />
//                                     <div>
//                                         <h5 className="card-title fw-bold">Jane Doe</h5>
//                                         <span className="text-secondary">CEO, Example Company</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/* Repeat this block for additional items */}
//                     <div className="carousel-item">
//                         <div className="card shadow-sm rounded-3">
//                             <div className="quotes display-2 text-body-tertiary">
//                                 <i className="bi bi-quote"></i>
//                             </div>
//                             <div className="card-body">
//                                 <p className="card-text">
//                                     "Another example testimonial text to showcase carousel functionality."
//                                 </p>
//                                 <div className="d-flex align-items-center pt-2">
//                                     <img
//                                         src="https://codingyaar.com/wp-content/uploads/square-headshot-2.png"
//                                         alt="Testimonial 2"
//                                         className="rounded-circle me-3"
//                                         style={{ width: '50px', height: '50px' }}
//                                     />
//                                     <div>
//                                         <h5 className="card-title fw-bold">June Doe</h5>
//                                         <span className="text-secondary">Manager, Sample Co.</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <button
//                     className="carousel-control-prev"
//                     type="button"
//                     data-bs-target="#testimonialCarousel"
//                     data-bs-slide="prev"
//                 >
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button
//                     className="carousel-control-next"
//                     type="button"
//                     data-bs-target="#testimonialCarousel"
//                     data-bs-slide="next"
//                 >
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Review;

// // Yesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss


import React, { useState, useEffect } from "react";
import axios from 'axios';

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
            <div className="container-fluid bg-body-tertiary py-3" style={{ width: "33%" }}>
                <div id="testimonialCarousel" className="carousel">
                    <div className="carousel-inner">
                        {reviews.length > 0 ? (
                            reviews.map((item, index) => (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={item._id}>
                                    <div className="card shadow-sm rounded-3">
                                        <div className="quotes display-2 text-body-tertiary">
                                            <i className="bi bi-quote"></i>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text">{item.text}</p>
                                            <div className="d-flex align-items-center pt-2">
                                                <img
                                                    src={item.profile_photo_url || 'https://via.placeholder.com/50'}
                                                    alt="User Profile"
                                                    className="rounded-circle"
                                                    style={{ width: '50px', height: '50px', marginRight: '10px' }}
                                                />
                                                <div>
                                                    <h5 className="card-title fw-bold">{item.author_name}</h5>
                                                    <span className="text-secondary">Rating: {item.rating} ★</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center">No reviews available.</div>
                        )}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


        </>
    );
};

export default GoogleReviews;
