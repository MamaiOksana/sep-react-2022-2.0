import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

import {postService} from "../../services";
import {RoutesForPage} from "../../routes/routes";


const PostByCommentPage = () => {

    const {postId} = useParams();

    const navigate = useNavigate();

    const [post, setPost] = useState(null);

    useEffect(() => {
        if (postId) {
            postService.getPostById(postId).then(({data}) => setPost({...data}))
        }
    }, [postId])
    if (!post) return null;
    return (
        <div className={'box'}>
            <div>postID: {postId}</div>
            <div>title: {post.title}</div>
            <div>info: {post.body}</div>
            <button onClick={() => navigate(`/${RoutesForPage.comments}`)}>{'<'}Back</button>
        </div>
    )
}

export {
    PostByCommentPage
}