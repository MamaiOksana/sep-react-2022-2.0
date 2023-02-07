import {useReducer, useRef} from "react";

import css from './App.module.css';
import {Cats, Comments, Dogs, Posts} from "./components";



const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            const [lastCat] = state.cats.slice(-1);
            const idCat = lastCat ? lastCat.id +1 : 0;
            return {...state, cats:[...state.cats, {id: idCat, name:action.payload}]}
        case 'DELETE_CAT':
            const indexCat = state.cats.findIndex(cat=>cat.id === action.payload);
            state.cats.splice(indexCat, 1)
            return {...state}
        case  'ADD_DOG':
            const [lastDog] = state.dogs.slice(-1);
            const idDog = lastDog?lastDog.id+1:0;
            return {...state, dogs: [...state.dogs, {id: idDog, name:action.payload}]}
        case 'DELETE_DOG':
            const indexDog = state.dogs.findIndex(dog=>dog.id === action.payload);
            state.dogs.splice(indexDog, 1)
            return {...state}
        default:
            return {...state}
    }
}

const App = () => {
   const catInput = useRef();
   const dogInput = useRef();
   const [state, dispatch] = useReducer (reducer, {cats:[], dogs:[]}, (data)=>data)

   const  createCat = () => {
        dispatch({type:'ADD_CAT', payload: catInput.current.value})
       catInput.current.value = ' '
   };


   const createDog = () => {
           dispatch({type:'ADD_DOG', payload: dogInput.current.value})
       dogInput.current.value =' '
       };

  return (
    <div className={css.App}>
        {/*<Posts/>*/}
        {/*<Comments/>*/}
        <div>
            <input type="text" ref={catInput}/>
            <button onClick={createCat}>createCat</button>
            <Cats cats={state.cats} dispatch={dispatch}/>
        </div>
        <div>
            <input type="text" ref={dogInput}/>
            <button  onClick={createDog}>createDog</button>
            <Dogs dogs={state.dogs} dispatch={dispatch}/>
        </div>
    </div>
  );
}

export default App;
