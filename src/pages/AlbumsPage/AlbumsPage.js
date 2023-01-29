import React, {useEffect, useState} from 'react';
import {albumsService} from "../../services";

const AlbumsPage = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(()=>{
        albumsService.getAll().then(({data}) => setAlbums([...data]))
    },[])

    return (
        <div>
            <h2>Albums Page</h2>
            <AlbumsPage albums={albums}/>
        </div>
    );
};

export {
    AlbumsPage
}