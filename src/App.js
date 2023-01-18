import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {Bart} from "./components/SimpsonFamily/bart";
import {Maggie} from "./components/SimpsonFamily/maggie";
import {Homer} from "./components/SimpsonFamily/homer";
import {Marge} from "./components/SimpsonFamily/marge";
import {Lisa} from "./components/SimpsonFamily/lisa";

function App() {

    let [actors, setActors] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(value => value.json())
            .then(value => {
                setActors(value.results.slice(0,6));

                console.log(value.results.slice(0,6));
            });
    },[]);


    return (
        <div>
            {
                actors.map(value => <div>
                    {
                        <div className="Actors">
                            <h4> {value.id}--{value.name}</h4>
                            <div><b>status</b> - {value.status}</div>
                            <div><b>species</b>: {value.species}</div>
                            <div><b>gender</b>: {value.gender}</div>
                            <img src={value.image} alt={""}/>
                        </div>
                    }</div>)
            }
            <div>
                <Homer/>
            </div>
            <div>
                <Marge/>
            </div>
            <div>
                <Bart/>
            </div>
            <div>
                <Lisa/>
            </div>
            <div>
                <Maggie/>
            </div>
        </div>
    )
}

export default App;