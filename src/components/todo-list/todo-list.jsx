import React from "react";
import TodoItem from "./todo-item";
const TodoList = ({todos, delElement}) =>{
  
  
  return(
    <ul className="todo-list p-0 m-0">
      {todos.map((item, index) =><TodoItem key={index} index={index} {...item} delElement={delElement} /> )}
    </ul>
  );
}
export default TodoList;