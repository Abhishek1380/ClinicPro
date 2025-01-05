import React, { useState } from 'react';
import './sampleFAQ.css'; // You can use the same CSS file

const SampleFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null); // To track the active question

    const faqList = [
        {
            question: "What do you mean by HTML & CSS?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, doloribus.",
        },
        {
            question: "What do you mean by JavaScript?",
            answer: "JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive",
        },
        {
            question: "From where you learned HTML & CSS?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, necessitatibus.",
        },
        {
            question: "Which code editor do you use?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, labore.",
        },
        {
            question: "Software you use for video editing?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, repudiandae!",
        }
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle between show and hide
    };

    return (
        <div className="accordion">
            <div className="image-box">
                <img src="images/mainImg.png" alt="Accordion Illustration" />
            </div>
            <div className="accordion-text">
                <div className="title">FAQ</div>
                <ul className="faq-text">
                    {faqList.map((faq, index) => (
                        <li key={index} className={activeIndex === index ? "showAnswer" : ""}>
                            <div className="question-arrow" onClick={() => handleToggle(index)}>
                                <span className="question">{faq.question}</span>
                                <i className={`bx bxs-chevron-down arrow ${activeIndex === index ? "rotate" : ""}`}></i>
                            </div>
                            {activeIndex === index && <p>{faq.answer}</p>}
                            <span className="line"></span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SampleFAQ;
