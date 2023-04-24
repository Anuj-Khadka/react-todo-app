import { useState } from "react";
import "./style.css";

function App() {
  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id != id);
    });
  };

  return (
    <>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length
          ? todos.map((todo) => {
              return (
                <li key={todo.id}>
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                    />
                    {todo.title}
                  </label>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </li>
              );
            })
          : "No Todo Item"}
      </ul>
    </>
  );
}

export default App;
