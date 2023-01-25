import logo from './logo.svg';
import './App.css';
import {UserForm, Users} from "./components";

function App() {
  return (
    <div className="App">
      <UserForm/>
      <hr/>
      <Users/>
    </div>
  );
}

export default App;
