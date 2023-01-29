import React from 'react';

const AlbumsList = ({albums=[]}) => {
    return (
        <div className={'list'}>
            {albums.map(item =>(
                <div  key={item.id}>
                    <div>
                        <div>UserId: {item.userId}</div>
                        <div>ID: {item.id}</div>
                        <div>Title: {item.title}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export {
    AlbumsList
}