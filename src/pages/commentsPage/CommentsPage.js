import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {commentsService} from "../../services"
import {Comments} from "../../components";

const CommentsPage = () => {

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        commentsService.getAll().then(({data})=> setComments([...data]))
    },[]);
   // console.log(comments);

    return (
        <div className={'page'}>
           <h2>Comments Page</h2>
            <hr/>
            <Comments comments={comments}/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {
    CommentsPage
}