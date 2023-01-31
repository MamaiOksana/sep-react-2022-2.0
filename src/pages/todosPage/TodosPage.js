import React, {useEffect, useState} from 'react';

import {toDoService} from "../../services";
import {ToDoList} from "";


const TodosPage = () => {

    const [todolist, setTodolist] = useState([]);

   useEffect(()=> {
       toDoService.getAll().then(({data})=> setTodolist([...data]))
   },[])

    return (
        <div>
            <h2>Todos page</h2>
            <ToDoList todolist={todolist}/>
        </div>
    );
};

export {
    TodosPage
}