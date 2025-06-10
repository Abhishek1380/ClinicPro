import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './BlogDetail.css';

const BlogDetail = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [blog, setBlog] = useState(null);

    const { slug } = useParams();

    useEffect(() => {
        axios.get(`https://backend-clinic-website.onrender.com/blog/${slug}`)
            .then(response => {
                const data = response.data;
                const extractedBlog = {
                    title: data.blog_detail_title,
                    img: data.img_blog_detail,
                    date: data.date,
                    desc1: data.blog_p1,
                    desc2: data.blog_p2,
                    desc3: data.blog_p3,
                    quote: data.blog_detail_thoughts
                };
                setBlog(extractedBlog);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the blog details!", error);
                setError("Failed to load blog details. Please try again later.");
                setLoading(false);
            });
    }, [slug]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!blog) return <p>No article found.</p>;

    return (
        <div className="Article_container">
            <div className="Article_div">
                <h2 className="Article_title text-center">{blog.title}</h2>
                <p className="Article_date">{blog.date}</p>
                <div className="Article_img">
                    <img src={blog.img} alt={blog.title} style={{ borderRadius: "30px" }} />
                </div>
                <p className="Article_description">{blog.desc1}</p>
                <p className="Article_description">{blog.desc2}</p>
                <p className="Article_description">{blog.desc3}</p>
                <p className="Article_quote" style={{ fontWeight: "bold" }}>{blog.quote}</p>
            </div>
        </div>
    );
};

export default BlogDetail;
