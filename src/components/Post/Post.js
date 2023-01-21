import React from 'react';

const Post = ({post, setPostInfo}) => {

    const {userId,id,title,body} = post

    return (
        <div className={'UserCards'}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            {/*<div>body: {body}</div>*/}
            <button className={'Btn'} onClick={()=>setPostInfo(post)}>more info</button>
        </div>
    );
};

export default Post;