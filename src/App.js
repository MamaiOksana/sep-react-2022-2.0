import './App.css';
import {useEffect, useState} from "react";

import {UserForm, Users, Comments, Comment, User, CommentForm} from "./components";
import {commentsService, usersService, axiosService } from "./services";


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
