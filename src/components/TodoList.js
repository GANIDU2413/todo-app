import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await axios.get("http://localhost:3001/todos");
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <TodoForm onNewTodo={fetchTodos} />
      {todos
        .slice()
        .reverse()
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} onTodoUpdate={fetchTodos} />
        ))}
    </div>
  );
};

export default TodoList;