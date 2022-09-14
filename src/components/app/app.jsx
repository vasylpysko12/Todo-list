import React from "react";
import { useState } from "react";
import TodoList from "../todo-list/todo-list";
import "./app.css";
const App = () => {
  
  const [todos, setTodos] = useState([
    { title: "First todos", completed: false },
    { title: "Second todos", completed: false },
  ]);
  
  const [todoTitle, setTitle] = useState("");

  function handleKeyPress(event) {
    if (event.key === "Enter" ) {
      addTodo()
    }
  }

  function handleClick() {
    addTodo()
  }

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: todoTitle , 
        completed: false 
      }
    ])
    setTitle('')
  }

  
  function delElement(index){
    const arr = [...todos]
    arr.splice(index,1)
    setTodos(arr)
  }

  return (
    <div className="app">
      <div className="app-todo-list">
        <div className="app-todo-list_title">Todo List</div>
        <div className="app-todo-list_block">
          <input
            className="form-control text-capitalize"
            type="text"
            placeholder="input text..."
            value={todoTitle}
            onInput={event => setTitle(event.target.value)}
            onKeyPress={handleKeyPress}
          ></input>
          <button className="btn btn-primary" onClick={handleClick}>Add</button>
        </div>
      </div>
      <TodoList todos={todos} delElement={delElement}/>
    </div>
  );
};
export default App;
