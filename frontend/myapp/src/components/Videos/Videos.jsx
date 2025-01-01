import React from 'react';
import './Videos.css';

const Videos = () => {
    return (
        <div className="video-container">

            <h3 className="text-center" style={{ margin: "50px auto" }}>Videos related to Homeopathy</h3>
            <div className="video-row">
                <div className="video-item">
                    <div className="video-wrapper video_16by9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/8HslUzw35mc?si=nAKdQE8e0WYsblnD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="video-item">
                    <div className="video-wrapper video_16by9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/0pcylasFLp4?si=6W6M8v7zk7Tgk8rj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="video-item">
                    <div className="video-wrapper video_16by9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Lq29f14X1t0?si=HXS0929eTgJurbF5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Videos;

