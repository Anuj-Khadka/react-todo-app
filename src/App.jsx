import { useEffect, useState } from "react";
import "./style.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import Summary from "./Summary";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  };

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

  const clearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  return (
    <div className="container">
      <h1>TODO</h1>
      <NewTodoForm onSubmit={addTodo} />
      {/* <h1 className="header">Todo List</h1>
       */}
      <div className="todo-list">
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
        <Summary
          todos={todos}
          clearCompleted={clearCompleted}
        />
      </div>
    </div>
  );
}

export default App;
