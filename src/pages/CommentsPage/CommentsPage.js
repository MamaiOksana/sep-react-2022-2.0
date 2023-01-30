import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services"
import {Outlet} from "react-router-dom";
import {Comments} from "../../components/comments/Comments";

const CommentsPage = () => {

    const [commets, setComments] = useState([]);

    useEffect(()=>{
        commentsService.getAll().then(({data})=> setComments([...data]))
    },[]);

    return (
        <div className={'page'}>
           <h2>Comments Page</h2>
            <hr/>
            <Comments comments={commets}/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {
    CommentsPage
}