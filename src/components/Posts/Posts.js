import React, {useEffect, useState} from 'react';

import Post from "../Post/Post";
import axios from "axios"
import {axiosService} from "../../services/axiosService";
import {userService} from "../../services/userService";

const Posts = () => {

const [posts, setPosts] = useState([]);
const [postInfo, setPostInfo]= useState(null);

useEffect(() => {
    userService.getAll()
        .then(value => value.data)
        .then(value => setPosts([...value]))
},[posts])

    return (
        <div>
            <h2>Post info:</h2>
            {postInfo && <div>
                <h5>user Id: {postInfo.id}</h5>
                <h4>title: "{postInfo.title}"</h4>
                <p><b>body</b>--{postInfo.body}</p>
            </div> }

            <hr/>

            <h2>Post:</h2>
            {posts.map(post => <Post key ={post.id} post={post} setPostInfo={setPostInfo}/>)}
        </div>
    );
};

export default Posts;