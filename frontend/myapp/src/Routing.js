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
import BlogDetail from './components/Blog/BlogDetail';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Gallery from './components/Gallery/Gallery';
import DetailPage from './components/DetailPage/DetailPage';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import CardDetail from './components/CardDetail/CardDetail';
import HomeopathyTreatmentDetail from './components/TreatmentComponent/HomeopathyTreatmentDetail';
import WhatsappButton from './components/WhatsappButton/WhatsappButton';
import BookAppointmentButton from './components/Buttons/BookAppointmentButton'; 
// moved to its own file
// ----------------------------------------------

const Routing = () => {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />

            <div className="main_component">
                <Routes>
                    <Route path="/" element={<HomePage />} />

                    {/* Treatment Routes */}
                    <Route path="/treatment" element={<TreatmentPage />} />
                    <Route path="/treatment/:id" element={<TreatmentDetails />} />
                    <Route path="/treatments/:id" element={<HomeopathyTreatmentDetail />} />

                    {/* Pages */}
                    <Route path="/aboutme" element={<AboutMePage />} />
                    <Route path="/blog" element={<HealthBlogPage />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/blog/:slug" element={<BlogDetail />} />
                    <Route path="/bookappointment" element={<AppointmentPage />} />
                    <Route path="/detail" element={<DetailPage />} />
                    <Route path="/service/:title" element={<ServiceDetail />} />
                    <Route path="/cardindetail" element={<CardDetail />} />
                </Routes>
            </div>

            <Footer />
            <BookAppointmentButton />
            <WhatsappButton />
        </Router>
    );
};

export default Routing;
