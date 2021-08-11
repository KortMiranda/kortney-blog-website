import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './PostFeed.css'
import axios from 'axios'
import Grid from "@material-ui/core/Grid";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function BlogFeed(props) {
    const [feed, setFeed] = useState([])

    useEffect(() => {
        function getFeed() {
            axios.get(`http://localhost:8000/posts/`)
            .then(res => {
                setFeed(res.data)
                console.log(res.data)
            })
            .catch(console.error)
        }
        getFeed()
    }, [])


    return (
        <div className="feed-grid">
            {feed.map((preview) => {
                if(!preview.image) {
                    return(
                        <div className="post-item">
                            <div className="no-image">
                                <Link to={`post/${preview.id}`} key={faCaretDown.id}>
                                <h3>{preview.title}</h3>
                                <p>{preview.natural_time}</p>
                                </Link>
                            </div>
                        </div>
                    )
                } else {
                return(
                    <div className="post-item">
                        <Link to={`post/${preview.id}`} key={faCaretDown.id}>
                            <img src={preview.image} alt={preview.title}/>
                            <div className="post-hover">
                            <h3>{preview.title}</h3>
                            <p>{preview.natural_time}</p>
                            </div>
                        </Link>
                    </div>
                )
                }
                // if(!preview.image) {
                //     return(
                //         <Grid item xs={0} sm={0} md={0} lg={0} className="post-item">
                //         <Link to={`post/${preview.id}`} key={faCaretDown.id}>
                //             <h3>{preview.title}</h3>
                //             <p>{preview.natural_time}</p>
                //         </Link>
                //         </Grid>
                //     )
                // } else {
                // return(
                //     <Grid item md={5} className="post-item">
                //         <Link to={`post/${preview.id}`} key={faCaretDown.id}>
                //             <img src={preview.image} alt={preview.title}/>
                //             <h3>{preview.title}</h3>
                //             <p>{preview.natural_time}</p>
                //         </Link>
                //     </Grid>
                // )
                // }
            })}
        </div>
    );
}

