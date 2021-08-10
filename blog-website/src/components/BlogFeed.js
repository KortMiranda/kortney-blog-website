import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'
import axios from 'axios'

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
        <div>
            
        </div>
    );
}

