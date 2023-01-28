import React from 'react';

const Comments = ({comments}) => {
    return (
        <div>
            {comments.map(item => {
            const {id, name, email} = item
                return (
                    <div key={id}>{id}--{name}--{email}</div>
                )
            })}
        </div>
    );
};

export {
    Comments
}