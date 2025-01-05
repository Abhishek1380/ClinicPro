import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Blogs.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/sample')
            .then(response => {
                setBlogs(response.data);
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);

            });
    }, []);

    return (
        <>
            <div className="Blogs_container">
                <div className="Blogs_div">
                    <div className="Blogs_card">
                        <div className="Blogscard-img-holder">
                            <img src="https://i.ibb.co/tDSSKc9/88888888.jpg" alt="Blog image" />
                        </div>
                        <h3 className="Blogs_blog-title">Learn Microinteraction</h3>
                        <span className="Blogs_blog-time">Monday Jan 20, 2020</span>
                        <p className="Blogs_description">
                            Explore the latest trends in homeopathic remedies and natural healing techniques. Learn how nature’s power can restore balance and improve your health.
                        </p>
                        <div className="Blogs_options">
                            <span>
                                Read Full Blog
                            </span>
                            <button className="Blogs_btn">Blog</button>
                        </div>
                    </div>

                    <div className="Blogs_card">
                        <div className="Blogscard-img-holder">
                            <img src="https://i.ibb.co/fVRWb1s/rrrrrrrrrrr.jpg" alt="Blog image" />
                        </div>
                        <h3 className="Blogs_blog-title">Learn Microinteraction</h3>
                        <span className="Blogs_blog-time">Monday Jan 20, 2020</span>
                        <p className="Blogs_description">
                            Discover the benefits of holistic wellness practices, including homeopathy and alternative therapies. Find tips for living a balanced and healthy life naturally.
                        </p>
                        <div className="Blogs_options">
                            <span>
                                Read Full Blog
                            </span>
                            <button className="Blogs_btn">Blog</button>
                        </div>
                    </div>
                    <div className="Blogs_card">
                        <div className="Blogscard-img-holder">
                            <img src="https://i.ibb.co/TmtNN2k/rrrrr.jpg" alt="Blog image" />
                        </div>
                        <h3 className="Blogs_blog-title">Learn Microinteraction</h3>
                        <span className="Blogs_blog-time">Monday Jan 20, 2020</span>
                        <p className="Blogs_description">
                            Gain insights into effective homeopathic treatments for common ailments. Our blog shares expert advice, remedies, and tips for promoting overall wellness naturally.
                        </p>
                        <div className="Blogs_options">
                            <span>
                                Read Full Blog
                            </span>
                            <button className="Blogs_btn">Blog</button>
                        </div>
                    </div>

                </div>
            </div>










        </>

    );
};

export default Blogs;
