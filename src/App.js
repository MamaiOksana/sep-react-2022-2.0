import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import UserComponent from "./components/Posts/Posts";
import {getUsers} from "./services/userServices";
import Posts from "./components/Posts/Posts";
import Post from "./components/Post/Post";

function App() {

//     let [users, setUsers] = useState([]);
//
//     useEffect(()=>{
// getUsers().then(value => setUsers(value));
//     }, []);




  return (
      <div>
          <Posts/>
          {/*<Post/>*/}
      </div>
    // <div>
    //
    //     {
    //         users.map(value => <UserComponent
    //             key={value.id}
    //             item={value}/>)
    //     }
    // </div>
  );
}

export default App;
