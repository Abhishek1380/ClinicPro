import React from 'react';
import './MapAndTimings.css';

const MapAndTimings = () => {
    return (
        <div className="MapAndTimings">
            <div className="map-container">
                <div className="map-box">
                    <div className="map-box-image">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.3216494041926!2d73.77564557490179!3d18.649556882469142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9d09eb3ce65%3A0x8240933884300eab!2sKshitij%20homoeopathic%20clinic!5e0!3m2!1sen!2sin!4v1734765354967!5m2!1sen!2sin" className="map-box__iframe"></iframe>
                    </div>

                    <p className="map-box__address">
                        Shop no 20, Sukhwani Heritage, Chikhali Akurdi Rd, near Bhalerao ENT hospital, panchatara Nagar, Bijali Nagar, Ganga Nagar, Akurdi, Pune, Pimpri-Chinchwad, Maharashtra 411035
                    </p>

                    <div className="map-box__actions">
                        <button className="button button--directions">Get Directions</button>
                        <button className="button button--call-clinic">Call Clinic</button>
                    </div>
                </div>
            </div>
            <div className="opd-hours">
                <h3 className="opd-hours__title">OPD Hours</h3>
                <div className="opd-hours__schedule">
                    <div className="opd-hours__day">
                        <span className="day-name">Monday:</span>
                        <span className="day-hours">10:30 AM - 2:00 PM | 5:00 PM - 9:00 PM</span>
                    </div>
                    <div className="opd-hours__day">
                        <span className="day-name">Tuesday:</span>
                        <span className="day-hours">10:30 AM - 2:00 PM | 5:00 PM - 9:00 PM</span>
                    </div>
                    <div className="opd-hours__day">
                        <span className="day-name">Wednesday:</span>
                        <span className="day-hours">10:30 AM - 2:00 PM | 5:00 PM - 9:00 PM</span>
                    </div>
                    <div className="opd-hours__day">
                        <span className="day-name">Thursday:</span>
                        <span className="day-hours">10:30 AM - 2:00 PM | 5:00 PM - 9:00 PM</span>
                    </div>
                    <div className="opd-hours__day">
                        <span className="day-name">Friday:</span>
                        <span className="day-hours">10:30 AM - 2:00 PM | 5:00 PM - 9:00 PM</span>
                    </div>
                    <div className="opd-hours__day">
                        <span className="day-name">Saturday:</span>
                        <span className="day-hours">10:30 AM - 2:00 PM | 5:00 PM - 9:00 PM</span>
                    </div>
                    <div className="opd-hours__day">
                        <span className="day-name">Sunday:</span>
                        <span className="day-hours">Closed</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MapAndTimings;