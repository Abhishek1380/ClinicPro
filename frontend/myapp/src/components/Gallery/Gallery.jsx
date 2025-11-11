import React, { useState } from 'react';
import { FaUserInjured, FaArrowRight, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import './Gallery.css';

const Gallery = () => {
    const [expandedImage, setExpandedImage] = useState(null);
    const navigate = useNavigate();


    const images = [
        { id: 7, url: 'https://i.ibb.co/GqwQ0Bs/Info.jpg', alt: 'Doctor consultation' },
        { id: 8, url: 'https://i.ibb.co/Wp5xC7t0/patient-1.jpg', alt: 'Pediatric care' },
        { id: 9, url: 'https://i.ibb.co/k6gghVXM/patient-2.jpg', alt: 'Senior patient care' },
        { id: 10, url: 'https://i.ibb.co/HLY5Pdgd/patient-3.jpg', alt: 'Physical therapy' },
        { id: 11, url: 'https://i.ibb.co/cK96g9pw/patient-4.jpg', alt: 'Dental examination' },
        { id: 12, url: 'https://i.ibb.co/fVJMY2Mp/patient-5.jpg', alt: 'Eye examination' },
    ];

    return (
        <div className="modern-gallery">
            <div className="gallery-header">
                <h2>Our Medical Facility</h2>
                <p>Explore our patient care and see how we support health and wellness.</p>
            </div>

            <div className="gallery-tabs">
                <button className="tab-button active">
                    <FaUserInjured /> Patient Care
                </button>
            </div>

            <div className="image-grid">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className="image-card"
                        onClick={() => setExpandedImage(image)}
                    >
                        <img src={image.url} alt={image.alt} />
                        <div className="image-hover">
                            <FaPlus className="zoom-icon" />
                            <span>View</span>
                        </div>
                    </div>
                ))}
            </div>

            {expandedImage && (
                <div className="image-modal" onClick={() => setExpandedImage(null)}>
                    <div className="modal-content">
                        <img src={expandedImage.url} alt={expandedImage.alt} />
                        <div className="image-details">
                            <h3>{expandedImage.alt}</h3>
                            <button className="close-button">
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="gallery-cta">
                <button className="cta-button" onClick={() => navigate('/bookappointment')}>
                    Schedule a Visit <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Gallery;
