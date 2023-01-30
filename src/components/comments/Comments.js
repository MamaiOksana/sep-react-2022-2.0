import React from 'react';

const Comments = ({comments = []}) => {
    return (
        <div className={'comments'}>
            {comments.map(item =>(
               <div key={item.id}>
                   <div>
                       <div>id: {item.id}</div>
                       <div>postId: {item.postId}</div>
                       <div>name: {item.name}</div>>
                   </div>
               </div>
            ) )})}
        </div>
    );
};

export {
    Comments
}