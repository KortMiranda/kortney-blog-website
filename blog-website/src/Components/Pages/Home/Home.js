import React from 'react';
import PostFeed from '../../PostFeed/PostFeed'
import './Home.css'

function Home(props) {
    return (
        <div>
            <div className="home-banner">
                {/* <img src="https://res.cloudinary.com/dl3d3eyto/image/upload/v1628706530/Kortney%20the%20Koding%20Girl/images/banners/blog-website-lavender-banner_lb47hz.png" alt="banner" /> */}
                <h1>Kortney the Koding Girl</h1>
                <h3>The Blog</h3>
                <h2>Dev tutorial, Lifestyle, War Stories</h2>
            </div>
            <PostFeed />
        </div>
    );
}

export default Home;