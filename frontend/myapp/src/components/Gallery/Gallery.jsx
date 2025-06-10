import React from "react";
import "./Gallery.css";
import { FaClinicMedical, FaUserInjured } from "react-icons/fa"; // ✅ use FaClinicMedical instead

const Gallery = () => {
    const loadMore = (sectionId) => {
        const gallery = document.getElementById(sectionId);
        const hiddenImages = gallery.querySelectorAll(".homeo-responsive-hidden");
        hiddenImages.forEach((img) => img.classList.remove("homeo-responsive-hidden"));
        gallery.nextElementSibling.style.display = "none";
    };

    return (
        <div className="homeo-container">
            {/* Clinic Section */}
            <section className="homeo-section">
                <h2 className="homeo-section-title">
                    <FaClinicMedical /> {/* ✅ Replaced icon */}
                    <span className="homeo-separator">&gt;</span>Clinic Images
                </h2>
                <div className="homeo-gallery-grid" id="clinic-gallery">
                    <img src="https://source.unsplash.com/400x300/?clinic" alt="Clinic 1" />
                    <img src="https://source.unsplash.com/400x300/?hospital" alt="Clinic 2" />
                    <img src="https://source.unsplash.com/400x300/?medical-room" alt="Clinic 3" />
                    <img src="https://source.unsplash.com/400x300/?doctor-office" alt="Clinic 4" className="homeo-responsive-hidden" />
                    <img src="https://source.unsplash.com/400x300/?reception" alt="Clinic 5" className="homeo-responsive-hidden" />
                    <img src="https://source.unsplash.com/400x300/?clinic-inside" alt="Clinic 6" className="homeo-responsive-hidden" />
                </div>
                <div className="homeo-load-more">
                    <button onClick={() => loadMore("clinic-gallery")}>Load More</button>
                </div>
            </section>

            {/* Patient Section */}
            <section className="homeo-section">
                <h2 className="homeo-section-title">
                    <FaUserInjured />
                    <span className="homeo-separator">&gt;</span>Patient Images
                </h2>
                <div className="homeo-gallery-grid" id="patient-gallery">
                    <img src="https://source.unsplash.com/400x300/?patient" alt="Patient 1" />
                    <img src="https://source.unsplash.com/400x300/?health-checkup" alt="Patient 2" />
                    <img src="https://source.unsplash.com/400x300/?medical-care" alt="Patient 3" />
                    <img src="https://source.unsplash.com/400x300/?smiling-patient" alt="Patient 4" className="homeo-responsive-hidden" />
                    <img src="https://source.unsplash.com/400x300/?doctor-patient" alt="Patient 5" className="homeo-responsive-hidden" />
                    <img src="https://source.unsplash.com/400x300/?medical-consultation" alt="Patient 6" className="homeo-responsive-hidden" />
                </div>
                <div className="homeo-load-more">
                    <button onClick={() => loadMore("patient-gallery")}>Load More</button>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
