import React, { useState } from 'react';
import './BookAppointment.css';

const BookAppointment = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && mobile.length === 10 && date) {
            alert(`Appointment booked successfully for ${name} on ${date}`);
            setName('');
            setMobile('');
            setDate('');
        } else {
            alert('Please fill in all fields correctly.');
        }
    };

    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 7);

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div className="book-appointment">

            <section className="hero-section text-center py-5">
                <div className="container">
                    <h1 className="text-primary mb-3">Book Your Appointment</h1>
                    <p className="text-muted">
                        Schedule your visit with ease and convenience. We’re here to provide you the best healthcare services.
                    </p>
                </div>
            </section>

            <section className="form-section py-5">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-4 mb-4">
                            <div className="card shadow p-4 contact-sidebar">
                                <h4 className="text-primary">Need Help?</h4>
                                <p className="text-muted mb-3">
                                    Contact us for assistance with your appointment.
                                </p>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <strong>Phone:</strong> +91-9403530005
                                    </li>
                                    <li className="mb-2">
                                        <strong>Email:</strong> support@clinic.com
                                    </li>
                                    <li>
                                        <strong>Address:</strong> Shop no 20, Sukhwani Heritage, Chikhali Akurdi Rd, near Bhalerao ENT hospital, panchatara Nagar, Bijali Nagar, Ganga Nagar, Akurdi, Pune, Pimpri-Chinchwad, Maharashtra 411035
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card shadow-lg p-4">
                                <h2 className="text-center text-primary mb-4">Appointment Form</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="form-label text-primary">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter your full name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="mobile" className="form-label text-primary">
                                            Mobile Number
                                        </label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="mobile"
                                            placeholder="Enter your 10-digit mobile number"
                                            value={mobile}
                                            onChange={(e) => setMobile(e.target.value)}
                                            required
                                            pattern="[0-9]{10}"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="date" className="form-label text-primary">
                                            Appointment Date
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                            required
                                            min={formatDate(today)}
                                            max={formatDate(maxDate)}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">
                                        Confirm Appointment
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <footer className="text-center py-4 text-muted">
                © 2024 ClinicName. All rights reserved.
            </footer>
        </div>
    );
};

export default BookAppointment;
