import React from 'react';
import './WhatsappButton.css';

const WhatsAppButton = () => {
    const whatsappNumber = '9766830294';
    const whatsappMessage = 'Hello! I would like to know more about your services.';

    const openWhatsApp = () => {
        const message = encodeURIComponent(whatsappMessage);
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    return (
        <div className="whatsapp-float" onClick={openWhatsApp}>
            <span className="help-text">How can I help you?</span>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="whatsapp-icon"
            />
        </div>
    );
};

export default WhatsAppButton;
