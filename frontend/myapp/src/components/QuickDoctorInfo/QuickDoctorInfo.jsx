import React from 'react';
import './QuickDoctorInfo.css';

const QuickDoctorInfo = () => {
    return (
        <>
            <div className="widthFull" style={{ width: "100%", height: "auto" }}>
                <div className="container myy-5">
                    <div className="doctor-section">

                        <div className="doctor-info">
                            <img src="https://i.ibb.co/thbYYBk/doccccc.jpg" alt="doccccc" border="0" />
                            <h3 className="mt-3">Dr. Satish Nichit </h3>
                            <p>
                                Renowned homeopathy specialist with years of experience in treating
                                chronic and acute conditions effectively.
                            </p>
                            <button className="btn btn-outline-success my-2 my-sm-0">Book Appointment</button>
                        </div>

                        <div className="appointment-box">
                            <h5>Book a Clinic Appointment</h5>
                            <p>Next Available at 10:30 AM, Tomorrow</p>
                            <p>
                                Sadanand Plaza, Wakad Road, Thergaon, near Khiwsera Trade Centre,
                                Mangal Nagar, Pune, Maharashtra - 411033
                            </p>

                            <div className="appointment-box_button">
                                <button className="btn btn-outline-success my-2 my-sm-0">Book Clinic Visit</button>
                                <button className="btn btn-outline-success my-2 my-sm-0">No Booking Fee</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuickDoctorInfo;