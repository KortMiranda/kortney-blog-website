import React from 'react';
import BlogFeed from '../components/BlogFeed'
import '../styles/Home.css'

function Home(props) {
    return (
        <div>
                <video className="header-banner" autoPlay muted>
                    <source src="https://res.cloudinary.com/dl3d3eyto/video/upload/v1628696787/Kortney%20the%20Koding%20Girl/images/banners/blog-website-banner-1000x200_mdpiou.mp4" type="video/mp4"></source>
                </video>
            <BlogFeed />
        </div>
    );
}

export default Home;