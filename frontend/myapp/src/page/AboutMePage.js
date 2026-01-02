import React from 'react';
import AboutMe from '../components/AboutMe/AboutMe';
import FAQ from '../components/FAQ/FAQ';
import FDoctorProfile from '../components/FDoctorProfile/FDoctorProfile';
// import DetailPage from '../components/DetailPage/DetailPage';

const AboutMePage = () => {
    return (
        <>
            {/* <DetailPage /> */}
            <AboutMe />
            <FDoctorProfile />
            <FAQ />
        </>
    )
}

export default AboutMePage;