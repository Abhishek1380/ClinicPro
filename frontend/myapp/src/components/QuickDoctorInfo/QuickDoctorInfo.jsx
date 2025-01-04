import React from "react";
import "./QuickDoctorInfo.css";

const QuickDoctorInfo = () => {
    return (
        <header className="header_container curved-border">
            <div className="header_content">
                <h1>
                    Welcome to Natural Healing
                </h1>
                <p>
                    Experience holistic health with our carefully curated homeopathy remedies. Nature has the power to heal—let
                    us guide you! Experience holistic health with our carefully curated homeopathy remedies. Nature has the power
                    to heal—let us guide you!
                </p>
                <button className="learn_more">Discover More</button>
            </div>
            {/* <div className="header_image">
                <div className="header_image_card header_image_card-1">
                    <span>Remedies</span>
                </div>
                <div className="header_image_card header_image_card-2">
                    <span>Consultations</span>
                </div>
                <div className="header_image_card header_image_card-3">
                    <span>Care Packages</span>
                </div>
                <div className="image_container">
                    <img src="https://i.ibb.co/zFBNYFX/hiii.jpg" alt="Remedies" className="kk_image" />
                    <img src="naruto.png" alt="Naruto" className="naruto_image" />
                </div>
            </div> */}
        </header>
    );
};

export default QuickDoctorInfo;
