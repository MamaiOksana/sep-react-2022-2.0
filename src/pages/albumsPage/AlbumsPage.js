import React, {useEffect, useState} from 'react';

import {albumsService} from "../../services";
import {AlbumsList} from "../../components/albumsList/AlbumsList";


const AlbumsPage = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(()=>{
        albumsService.getAll().then(({data}) => setAlbums([...data]))
    },[])

    return (
        <div className={'page'}>
            <h2>Albums Page</h2>
            <AlbumsList albums={albums}/>
        </div>
    );
};

export {
    AlbumsPage
}