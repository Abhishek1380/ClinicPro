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
            {/* <div className="Blog_div">
                <div className="Blog_container">
                    {blogs.length > 0 ? (
                        blogs.map((item) => (
                            <Link to={`/blogs/${item.treatment_box}`} key={item.treatment_box}>
                                <div className="Blog_main_box">
                                    <div className="Blog_box">
                                        <div className="Blog_img_div">
                                            <img src={item.img_jpg} alt={item.title} />
                                        </div>
                                        <h3 style={{ textDecoration: "none", color: 'inherit' }}>{item.title}</h3>
                                        <p>{item.motivation}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p>Loading treatments...</p>
                    )}
                </div>
            </div> */}
            <div className="Blogs_container">
                <div className="Blogs_div">
                    <div className="Blogs_card">
                        <div className="Blogscard-img-holder">
                            <img src="https://images.unsplash.com/photo-1640102953836-5651f5d6b240?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80" alt="Blog image" />
                        </div>
                        <h3 className="Blogs_blog-title">Learn Microinteraction</h3>
                        <span className="Blogs_blog-time">Monday Jan 20, 2020</span>
                        <p className="Blogs_description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis viverra turpis, non cursus ex accumsan at.
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
                            <img src="https://images.unsplash.com/photo-1640102953836-5651f5d6b240?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80" alt="Blog image" />
                        </div>
                        <h3 className="Blogs_blog-title">Learn Microinteraction</h3>
                        <span className="Blogs_blog-time">Monday Jan 20, 2020</span>
                        <p className="Blogs_description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis viverra turpis, non cursus ex accumsan at.
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
                            <img src="https://images.unsplash.com/photo-1640102953836-5651f5d6b240?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80" alt="Blog image" />
                        </div>
                        <h3 className="Blogs_blog-title">Learn Microinteraction</h3>
                        <span className="Blogs_blog-time">Monday Jan 20, 2020</span>
                        <p className="Blogs_description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis viverra turpis, non cursus ex accumsan at.
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
