// export default function UserComponent (props) {
//     let {item:{id, name, email}} = props;
//     return(
//         <div>
//             <div>{id}</div><h4>{name}</h4><p>{email}</p>
//         </div>
//     )
// }

import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import axios from "axios"

const Posts = () => {

const [posts, setPosts] = useState([]);
const [count, setCount] = useState(0);

useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.data)
        .then(value => setPosts([...value]))
},[count])



    return (
        <div>
            <button onClick={()=>setCount(info => info+1)}>more info</button>
            {posts.map(post => <Post key ={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;