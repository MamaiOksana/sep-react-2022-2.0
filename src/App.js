import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import UserComponent from "./components/Posts/Posts";
import Posts from "./components/Posts/Posts";
import Post from "./components/Post/Post";
import OneUsersPost from "./components/OneUsersPost/OneUsersPost";
import SpaceX from "./components/Space-X/Space-X";


function App() {

  return (
      <div>
          <Posts/>
          {/*<SpaceX/>*/}

          {/*<Post/>*/}
          {/*<OneUsersPost/>*/}
      </div>
  );
}

export default App;
