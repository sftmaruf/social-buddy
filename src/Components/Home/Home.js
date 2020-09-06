import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import LocalCarousel from '../LocalCarousel/LocalCarousel';
import './Home.css';

const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    return (
        <div className="home-container">
            <LocalCarousel></LocalCarousel>
            <div>
                {
                    posts.map(post => <Post key={post.id} post={post} ></Post>)
                }
            </div>
        </div>
    )
}

export default Home;