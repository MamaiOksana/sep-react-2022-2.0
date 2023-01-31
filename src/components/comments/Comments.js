import React from 'react';

import {Comment} from "../comment/Comment";



const Comments = ({comments}) => {
    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
        // <div>
        //     {comments.map(item => {
        //     const {id, name, email} = item
        //         return (
        //             <div key={id}>{id}--{name}--{email}</div>
        //         )
        //     })}
        // </div>
    );
};

export {
    Comments
}