import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  return (
    <li key={id}>
      {/* <label htmlFor="">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label> */}
      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <p className="todo-item">{title}</p>
        <span className="checkmark"></span>
      </label>
      <span className="btn btn-danger" onClick={() => deleteTodo(id)}>
        <MdDeleteOutline size="1.5rem" />
      </span>
    </li>
  );
};

export default TodoItem;
