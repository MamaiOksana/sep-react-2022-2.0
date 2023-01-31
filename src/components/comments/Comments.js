import React from 'react';
import {useNavigate} from "react-router-dom";

const Comments = ({comments = []}) => {

    const navigate = useNavigate();


    return (
        <div className={'list'}>
            {comments.map(item =>{
                const {id, postId, name} =item;
            return (
               <div key={item.id}>
                   <div className={'box'}>
                       <div>id: {id}</div>
                       <div>postId: {postId}</div>
                       <div>name: {name}</div>
                       <button onClick={() =>navigate(postId.toString())}>get post</button>
                   </div>
               </div>
            ) })})}
        </div>
    );
};

export {
    Comments
}