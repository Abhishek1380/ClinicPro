import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
// // import './Routing.css';
// import HomePage from './page/HomePage';
// import TreatmentPage from './page/TreatmentPage';
// import TreatmentDetails from './components/Treatments/TreatmentDetails';
// import AboutMePage from './page/AboutMePage';
// import HealthBlogPage from './page/HealthBlogPage';
// import AppointmentPage from './page/AppointmentPage';
// import BlogDetail from './components/Blog/BlogDetail';
// import ScrollToTop from './components/ScrollToTop/ScrollToTop';
// import ContactBanner from './components/ContactBanner/ContactBanner';
// import Gallery from './components/Gallery/Gallery';
// import DetailPage from './components/DetailPage/DetailPage';
// import ServiceDetail from './components/ServiceDetail/ServiceDetail';
// // import CardDetail from './components/CardDetail/CardDetail';
// import HomeopathyTreatmentDetail from './components/TreatmentComponent/HomeopathyTreatmentDetail';
// import WhatsappButton from './components/WhatsappButton/WhatsappButton';


const SuspendedPage = () => {
    return (
        <div style={{
            background: "#111",
            color: "#eee",
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
            paddingTop: "15%"
        }}>
            <div style={{
                display: "inline-block",
                background: "#222",
                padding: "35px 45px",
                borderRadius: "10px",
                border: "1px solid #444"
            }}>
                <h1 style={{ color: "#ff4444" }}>🚫 Service Suspended</h1>
                <p>This website is currently unavailable.</p>
                <p>Reason: Developer payment not cleared.</p>
                <p>Please contact the developer to restore access.</p>
            </div>
        </div>
    );
};


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
            <Routes>
                <Route path="*" element={<SuspendedPage />} />
            </Routes>

           {/* 
    <ScrollToTop />
    <Navbar />
     
    <div className="main_component">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/treatment" element={<TreatmentPage />} />
            <Route path="/treatment/:id" element={<TreatmentDetails />} />
            <Route path="/aboutme" element={<AboutMePage />} />
            <Route path="/blog" element={<HealthBlogPage />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/bookappointment" element={<AppointmentPage />} />
             <Route path='/detail' element={<DetailPage />} /> 
            <Route path="/service/:title" element={<ServiceDetail />} />
            {/* <Route path='cardindetail' element={<CardDetail />} /> 
            <Route path="/treatments/:id" element={<HomeopathyTreatmentDetail />} />
        </Routes>
    </div>
    <Footer />
    <BookAppointmentButtonc />
    <WhatsappButton />

                */}


        </Router>
    );
};

export default Routing;
