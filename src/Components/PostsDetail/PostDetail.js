import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../Post/Post';
import Comment from '../Comment/Comment';
import './PostDetails.css';

const PostDetail = () => {
    const currentPost = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${currentPost.id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [currentPost.id]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${currentPost.id}/comments`)
            .then(res => res.json())
            .then(data => setComments(data));
    }, [currentPost.id]);


    return (
        <div id = "postdetails-container">
            <Post postDetails={true} post={post}>
                <h3 style={{ fontWeight: 400, fontSize: "medium" }}>{post.body}</h3>
                <hr></hr>
                <div className="comment-container">
                    <img alt="icon" src="https://img.icons8.com/clouds/50/000000/comments.png"/>
                    <h3>Comments</h3>
                </div>
                {
                    comments.map(comment => <Comment comment={comment} commentsLength={comments.length} key={comment.id}></Comment>)
                }
            </Post>
        </div>
    )
};

export default PostDetail;