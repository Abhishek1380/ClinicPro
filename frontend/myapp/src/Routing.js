import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './Routing.css';
import HomePage from './page/HomePage';
import TreatmentPage from './page/TreatmentPage';
import TreatmentDetails from './components/Treatments/TreatmentDetails';
import AboutMePage from './page/AboutMePage';
import HealthBlogPage from './page/HealthBlogPage';
import AppointmentPage from './page/AppointmentPage';
import BlogsDetail from './components/Blogs/BlogsDetail';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const BookAppointmentButton = () => {
    const navigate = useNavigate();

    return (
        <div className="book-appointment-container">
            <button className="book-appointment-button" onClick={() => navigate('/bookappointment')}>
                Book Appointment
            </button>
        </div>
    );
};

const Routing = () => {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />
            <div className="main_component">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/treatment" element={<TreatmentPage />} />
                    <Route path="/treatment/:id" element={<TreatmentDetails />} />
                    <Route path="/aboutme" element={<AboutMePage />} />
                    <Route path="/blogs" element={<HealthBlogPage />} />
                    <Route path="/blogs/:rank" element={<BlogsDetail />} />
                    <Route path="/bookappointment" element={<AppointmentPage />} />
                </Routes>
            </div>
            <Footer />
            <BookAppointmentButton />
        </Router>
    );
};

export default Routing;
