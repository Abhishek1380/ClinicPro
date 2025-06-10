import React, { useState } from 'react';
import './Cards.css';

const treatments = [
    {
        img: "https://i.ibb.co/nNtB8YRJ/pexels-arina-krasnikova-6663456.jpg",
        title: "Skin Glow Therapy",
        desc: "Natural homeopathic remedies to restore skin glow, reduce dullness, and promote an even, radiant tone."
    },
    {
        img: "https://i.ibb.co/Lzbyjjs1/towfiqu-barbhuiya-FGq-Eu-M0wu-Kk-unsplash.jpg",
        title: "Hair Fall Control",
        desc: "Personalized homeopathic medicines to reduce hair fall, strengthen roots, and support healthy hair regrowth."
    },
    {
        img: "https://i.ibb.co/4R0sMNpC/daniil-lebedev-3-S75o-Mu-o-UQ-unsplash.jpg",
        title: "Acne and Pimples",
        desc: "Treats acne from within by correcting hormonal imbalance and digestive causes using safe homeopathic solutions."
    },
    {
        img: "https://i.ibb.co/nq6PY0LF/andy-vult-g-ITzc-Wz-M-Y4-unsplash.jpg",
        title: "Allergy Relief",
        desc: "Helps reduce skin rashes, itching, and seasonal allergies by strengthening the immune system naturally."
    },
    {
        img: "https://i.ibb.co/0jm3z4Xs/fuu-j-Fu7-RNjl-p-W0-unsplash.jpg",
        title: "Weight Management",
        desc: "Homeopathy along with lifestyle guidance to support healthy weight loss by balancing metabolism and appetite."
    },
    {
        img: "https://i.ibb.co/zcjgHYS/olga-thelavart-k4-Manx-EQAn-E-unsplash.jpg",
        title: "Hair Dandruff Solution",
        desc: "Addresses dandruff, scalp dryness, and itchiness with gentle homeopathic medicines for healthy scalp care."
    },
    {
        img: "https://i.ibb.co/PZ4GfwLV/volodymyr-hryshchenko-qk-JRmy1a-FHY-unsplash.jpg",
        title: "Detox and Immunity Boost",
        desc: "Homeopathy-supported natural detox plans that cleanse the body and enhance immunity without harsh side effects."
    },
    {
        img: "https://i.ibb.co/m5rRg3bj/towfiqu-barbhuiya-Fs-VEqei-Ot-Po-unsplash.jpg",
        title: "Chronic Skin Issues",
        desc: "Long-term management of eczema, psoriasis, and dermatitis using deep-acting homeopathic remedies."
    },
    {
        img: "https://i.ibb.co/QvfDKnxL/pexels-david-garrison-1128051-2128817.jpg",
        title: "Microneedle",
        desc: "Microneedling boosts collagen, improving scars, wrinkles, and skin elasticity effectively."
    }
];

const Cards = () => {
    const [flippedIndices, setFlippedIndices] = useState([]);

    const toggleFlip = (index) => {
        setFlippedIndices((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    return (
        <>
            <h5 className="Page_title text-center" style={{ display: 'flex', textAlign: 'center' }}>
                <span><i className="ri-hospital-line"></i><i className="ri-arrow-right-s-line"></i></span>
                Learn about our treatments
            </h5>
            <div className="cards_treatments__grid">

                {treatments.map((treatment, index) => (
                    <div
                        key={index}
                        className={`cards_treatment__card ${flippedIndices.includes(index) ? 'flipped' : ''}`}
                        onClick={() => toggleFlip(index)}
                    >
                        <div className="cards_treatment__inner">
                            <div className="cards_treatment__front">
                                <img src={treatment.img} alt={treatment.title} />
                                <h3>{treatment.title}</h3>
                            </div>
                            <div className="cards_treatment__back">
                                {treatment.desc}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Cards;
