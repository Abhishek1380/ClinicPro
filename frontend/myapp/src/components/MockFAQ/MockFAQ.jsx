import React, { useState, useEffect } from "react";
import './MockFAQ.css';
import axios from 'axios';

const MockFAQ = () => {
    const [faqList, setFaqList] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        axios
            .get('https://backend-clinic-website.onrender.com/FAQ1')
            .then(response => {
                setFaqList(response.data);
                setError(null);
            })
            .catch(error => {
                console.error('Error fetching FAQs:', error);
                setError("Failed to load FAQs. Please try again later.");
            });
    }, []);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            <div className="image-box">
                <img src="https://i.ibb.co/S6NQbLZ/mainImg.png" alt="FAQ" />
            </div>
            <div className="accordion-text">
                <div className="title text-primaryy">FAQ</div>
                {error ? (
                    <p className="error-message">{error}</p>
                ) : (
                    <ul className="faq-text">
                        {faqList.map((faq, index) => (
                            <li key={index} className={activeIndex === index ? 'showAnswer' : ''}>
                                <div className="question-arrow" onClick={() => handleToggle(index)}>
                                    <span className="question text-primaryy">{faq.question}</span>
                                    <i className={`bx bxs-chevron-down arrow ${activeIndex === index ? 'rotate' : ''}`}></i>
                                </div>
                                {activeIndex === index && <p>{faq.answer}</p>}
                                <span className="line"></span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default MockFAQ;
