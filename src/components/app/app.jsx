import React, { useState, useEffect } from "react";
import TodoList from "../todo-list/todo-list";
import "./app.css";
const App = () => {
  
  const defaultTodos = JSON.parse(localStorage.getItem('todos'))
  const [todoTitle, setTitle] = useState("");
  const [todos, setTodos] = useState(defaultTodos || []);

 
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  useEffect(()=>{
    const raw = localStorage.getItem('todos') || JSON.stringify([])
    setTodos(JSON.parse(raw))
  },[])

  function handleKeyPress(event) {
    if (todoTitle && event.key === "Enter" ) {
      addTodo()
    }
  }

  function handleClick() {
    if(todoTitle){
      addTodo()
    }
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
            className="form-control"
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
