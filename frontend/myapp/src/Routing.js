import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import HomePage from './page/HomePage';
import TreatmentPage from './page/TreatmentPage';
import TreatmentDetails from './components/Treatments/TreatmentDetails';
import AboutMePage from './page/AboutMePage';
import HealthBlogPage from './page/HealthBlogPage';
import AppointmentPage from './page/AppointmentPage';
import BlogsDetail from './components/Blogs/BlogsDetail';



const Routing = () => {
    return (

        <>
            <Router>
                <Navbar />
                <div className="main_component">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/treatment" element={<TreatmentPage />} />
                        {/* <Route path="/treatment/:id" element={<TreatmentDetails />} /> */}
                        <Route path="/treatment/:id" element={<TreatmentDetails />} />
                        <Route path="/aboutme" element={<AboutMePage />} />
                        <Route path="/blogs" element={<HealthBlogPage />} />
                        <Route path="/blogs/:id" element={<BlogsDetail />} />
                        <Route path="/bookappointment" element={<AppointmentPage />} />
                    </Routes>
                </div>
                <Footer />
                <div className="book-appointment-container">
                    <button className="book-appointment-button">Book Appointment</button>
                </div>
            </Router >
        </>
    )
}

export default Routing;

