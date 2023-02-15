import React from 'react';
import {useSelector} from "react-redux";

const Header = () => {

   const {selectedPost} = useSelector(state => state.posts);

    return (
        <div className={'body'}>
            <b>body: </b>{selectedPost && selectedPost.body}
        </div>
    );
};

export {
    Header
};