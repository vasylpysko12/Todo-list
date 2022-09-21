import React, { useState } from "react";
import "./todo-item.css";

const TodoItem = ({ title, index, delElement, completed }) => {
  const [checked, setChecked] = useState(completed);
  const cls = ["todo-item"];
  
  // const todos = JSON.parse(localStorage.getItem('todos'))
  // todos[index].completed = checked
  // localStorage.setItem('todos', JSON.stringify(todos))
  if (checked === true) {
    cls.push("completed");
  }
  return (
    <li className={cls.join(" ")}>
      
        <label className="input-group-text " >
          <input
            className="form-check-input mt-0 "
            type="checkbox"
            value=""
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <span className="todo-title">{title} </span>

          <button
            className="btn btn-secondary "
            onClick={() => delElement(index)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash2-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
            </svg>
          </button>
        </label>
      
    </li>
  );
};
export default TodoItem;
