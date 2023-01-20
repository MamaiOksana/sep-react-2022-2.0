import React, {useEffect, useState} from 'react';

import Post from "../Post/Post";
import axios from "axios"
import {axiosService} from "../../services/axiosService";
import {userService} from "../../services/userService";

const Posts = () => {

const [posts, setPosts] = useState([]);
const [count, setCount] = useState(0);
const [postInfo, setPostInfo]= useState(null);

useEffect(() => {
    userService.getAll()
        .then(value => value.data)
        .then(value => setPosts([...value]))
},[count])

    return (
        <div>
            <h2>Post info:</h2>
            {postInfo && <div><h4>title: "{postInfo.title}"</h4>
                <p>body--{postInfo.body}</p></div> }

            <hr/>

            <h2>Post:</h2>
            {/*<button onClick={()=>setCount(info => info+1)}>more info</button>*/}
            {posts.map(post => <Post key ={post.id} post={post} setPostInfo={setPostInfo}/>)}
        </div>
    );
};

export default Posts;