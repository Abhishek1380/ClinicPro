import React, { useEffect, useState } from 'react';
import './BlogsDetail.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogsDetail = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://backend-clinic-website.onrender.com/blogs/${id}`)
            .then(response => {
                setBlogs(response.data);
                console.log(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the treatment details!", error);
                setError("Failed to load treatment details. Please try again later.");
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p>Loading articles...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="Article_container">
            {blogs.length > 0 ? (
                blogs.map((item) => (
                    <div className="Article_div" key={item.box_container}>
                        <h2 className="Article_title text-center">{item.title}</h2>
                        <p className="Article_date">{item.date}</p>
                        <div className="Article_img">
                            <img src={item.img_svg} alt={item.title} />
                        </div>
                        <p className="Article_description">{item.Description}</p>
                        <p className="Article_quote">{item.motivation}</p>
                    </div>
                ))
            ) : (
                <p>No articles found.</p>
            )}
        </div>
    );
};

export default BlogsDetail;
