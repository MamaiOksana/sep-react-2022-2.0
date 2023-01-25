import logo from './logo.svg';
import './App.css';
import {UserForm, Users} from "./components";
import {useEffect, useState} from "@types/react";
import {usersService} from "./services";

const App = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        usersService.getAll().then(({data})=>setUsers([...data]))
    }, [])


    return (
    <div className="App">
      <UserForm setUsers={setUsers}/>
      <hr/>
      <Users users ={users}/>
    </div>
  );
}

export default App;
