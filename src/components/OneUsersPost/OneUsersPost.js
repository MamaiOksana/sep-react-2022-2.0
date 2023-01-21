import React, {useEffect, useState} from 'react';

import {userService} from "../../services/serviceForUsers/userService";
import Post from "../Post/Post";

const OneUsersPost = () => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        userService.getById(5).then(value => value.data).then(value => setPost(value))
    },[]);

    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export default OneUsersPost;