import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './page/HomePage';
import TreatmentPage from './page/TreatmentPage';
import TreatmentDetails from './components/Treatments/TreatmentDetails';
import AboutMePage from './page/AboutMePage';
import HealthBlogPage from './page/HealthBlogPage';
import AppointmentPage from './page/AppointmentPage';
import BlogDetail from './components/Blog/BlogDetail';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ContactBanner from './components/ContactBanner/ContactBanner';
import Gallery from './components/Gallery/Gallery';
import DetailPage from './components/DetailPage/DetailPage';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import CardDetail from './components/CardDetail/CardDetail';    // ✅ FIXED
import HomeopathyTreatmentDetail from './components/TreatmentComponent/HomeopathyTreatmentDetail';
import WhatsappButton from './components/WhatsappButton/WhatsappButton';


// Small appointment button
const BookAppointmentButtonc = () => {
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

            {/* <Routes>
                <Route path="*" element={<SuspendedPage />} />
            </Routes> */}

            <ScrollToTop />
            <Navbar />

            <div className="main_component">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/treatment" element={<TreatmentPage />} />
                    <Route path="/treatment/:id" element={<TreatmentDetails />} />
                    <Route path="/aboutme" element={<AboutMePage />} />
                    <Route path="/blog" element={<HealthBlogPage />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/blog/:slug" element={<BlogDetail />} />
                    <Route path="/bookappointment" element={<AppointmentPage />} />
                    <Route path="/detail" element={<DetailPage />} />
                    <Route path="/service/:title" element={<ServiceDetail />} />
                    <Route path="/cardindetail" element={<CardDetail />} />
                    <Route path="/treatments/:id" element={<HomeopathyTreatmentDetail />} />
                </Routes>
            </div>

            <Footer />
            <BookAppointmentButtonc />
            <WhatsappButton />

        </Router>
    );
};

export default Routing;
