import React, { useState, useEffect } from "react";
import './FAQ.css';
import axios from 'axios';

const FAQ = () => {
    const [faqList, setFaqList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/FAQ1')
            .then(response => {
                setFaqList(response.data);
            })
            .catch(error => {
                console.error('Error fetching FAQs:', error);
            });
    }, []);

    return (
        <div className="container my-5 " style={{ paddingTop: "1.3rem" }}>
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>
            <div id="faqAccordion">
                {faqList.length > 0 ? (
                    faqList.map((faq, index) => (
                        <div className="card faq-card" key={index}>
                            <div className="card-header" id={`heading${index}`} >
                                <h5 className="mb-0">
                                    <button
                                        className="btn btn-link faq-btn"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${index}`}
                                        aria-expanded={index === 0 ? "true" : "false"}
                                        aria-controls={`collapse${index}`}
                                        style={{
                                            color: "#218838",
                                            fontWeight: 500
                                        }}
                                    >
                                        {faq.question}
                                    </button>
                                </h5>
                            </div>
                            <div
                                id={`collapse${index}`}
                                className={`collapse ${index === 0 ? "show" : ""}`}
                                aria-labelledby={`heading${index}`}
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="card-body">{faq.answer}</div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center">No FAQs available.</div>
                )}
            </div>
        </div>
    );
};

export default FAQ;
