import React from 'react';

const ToDoList = ({todolist = []}) => {
    return (
        <div className={'list'}>
            {todolist.map(item =>(
                <div  key={item.id}>
                    <div>
                        <div>UserId: {item.userId}</div>
                        <div>ID: {item.id}</div>
                        <div>Title: {item.title}</div>
                        <div>Status: {item.completed ? 'Completed' : 'Not done yet'}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export {
    ToDoList
}