import './App.css';
import {useEffect, useState} from "react";

import {UserForm, Users} from "./components";
import {usersService} from "./services";
import {Comments} from "./components/comments/Comments";
import {CommentForm} from "./components/commentForm/CommentForm";
import {commentsService} from "./services/commentsService";



const App = () => {

    // const [users, setUsers] = useState([]);
    //
    // useEffect(()=>{
    //     usersService.getAll().then(({data})=>setUsers([...data]))
    // }, [])


    const [comments, setComments] = useState([]);

    useEffect(()=> {
        commentsService.getAll().then(({data}) => setComments([...data]))
    },[])

    return (
    <div>
      {/*<UserForm setUsers={setUsers}/>*/}
      {/*<hr/>*/}
      {/*<Users users ={users}/>*/}

        <Comments comments={comments}/>
        <hr/>
        <CommentForm setComments={setComments}/>
    </div>
  );
}

export default App;
