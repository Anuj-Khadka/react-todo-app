import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  return (
    <li key={id}>
      <label htmlFor="">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <span className="btn btn-danger" onClick={() => deleteTodo(id)}>
        <MdDeleteOutline size="1.5rem"/>
      </span>
    </li>
  );
};

export default TodoItem;
