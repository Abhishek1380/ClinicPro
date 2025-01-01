import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AboutMe from '../components/AboutMe/AboutMe';
import Footer from '../components/Footer/Footer';
import FAQ from '../components/FAQ/FAQ';
import QuickDoctorInfo from '../components/QuickDoctorInfo/QuickDoctorInfo';
import MapAndTimings from '../components/MapAndTimings/MapAndTimings';
import Treatments from '../components/Treatments/Treatments';
import Blogs from '../components/Blogs/Blogs';
import BlogsDetail from '../components/Blogs/BlogsDetail';
import TreatmentDetails from '../components/Treatments/TreatmentDetails';
import Review from '../components/Review/Review';
// import Navbar1 from '../components/Navbar1/Navbar1';
// import './HomePage.css';
import Videos from '../components/Videos/Videos';
import BookAppointment from '../components/BookAppointment/BookAppointment';
import Services from '../components/Services/Services';
import Why from '../components/Why/Why';
import HomeAboutMe from '../components/HomeAboutMe/HomeAboutMe';



const HomePage = () => {
    return (
        <>



            <QuickDoctorInfo />
            <Services />
            <Why />
            <HomeAboutMe />
            <MapAndTimings />
            <div className="text-center" style={{ margin: "50px auto" }}>
                <h3>Reviews</h3>
                <Review />
            </div>
            <Videos />
            <FAQ />



            {/* <BookAppointment /> */}







        </>
    )
}

export default HomePage;