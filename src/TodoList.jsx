import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="list">
      {todos.length
        ? todos.map((todo) => {
            return (
              <TodoItem
                {...todo}
                key={todo.id}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            );
          })
          
        : "No Todo Item"}
    </ul>
  );
};

export default TodoList;
