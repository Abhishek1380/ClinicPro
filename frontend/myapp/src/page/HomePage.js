import React from 'react';
// import Navbar from '../components/Navbar/Navbar'
import LandingPage from '../components/LandingPage/LandingPage';
import Services from '../components/Services/Services';
import Why from '../components/Why/Why';
import MapAndTimings from '../components/MapAndTimings/MapAndTimings';
import Review from '../components/Review/Review';
import Videos from '../components/Videos/Videos';
import MockFAQ from '../components/MockFAQ/MockFAQ';

const HomePage = () => {
    return (
        <>


            <LandingPage />
            <Services />
            <Why />
            <MapAndTimings />
            <div className="text-center" style={{ margin: "50px auto" }}>
                <h3>Reviews</h3>
                <Review />
            </div>
            <Videos />
            <MockFAQ />
        </>
    )
}

export default HomePage;
