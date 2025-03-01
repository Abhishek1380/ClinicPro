

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './TreatmentDetails.css';



const TreatmentDetails = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();
    const [treatments, setTreatments] = useState([]);


    useEffect(() => {

        axios.get(`https://backend-clinic-website.onrender.com/treatments/${id}`)
            .then(response => {
                setTreatments(response.data);
                console.log(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the treatment details!", error);
                setError("Failed to load treatment details. Please try again later.");
                setLoading(false);
            });
    }, [id]);

    return (
        <div className="Article_container" >
            {treatments.length > 0 ? (
                treatments.map((item) => (
                    <div className="Article_div" key={item.t_id}>
                        <h2 className="Article_title text-center">{item.title}</h2>
                        <p className="Article_date">{/*{item.date}*/} 22nd Oct 2024</p>
                        <div className="Article_img" >
                            <img src={item.img} alt={item.title} style={{ borderRadius: "30px" }} />
                        </div>
                        <p className="Article_description">{item.desc1}</p>
                        <p className="Article_description">{item.desc2}</p>
                        <p className="Article_description">{item.desc3}</p>
                        <p className="Article_quote" style={{ fontWeight: "bold" }}>{item.greet1}</p>
                    </div>
                ))
            ) : (
                <p>No articles found.</p>
            )}
        </div>
    );
};

export default TreatmentDetails;


