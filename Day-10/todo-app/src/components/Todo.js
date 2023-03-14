import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const latestTodos = todos.filter((todo) => todo.id !== id);
    setTodos(latestTodos);
  };

  return (
    <>
      <div className="main-title">
        <b>TODO's</b>
      </div>
      <TodoForm onSubmitHandler={addTodo} />
      <hr />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export default Todo;
