import React from "react";
import axios from "axios";
import { ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";

const TodoItem = ({ todo, onTodoUpdate }) => {
  const markAsDone = async () => {
    await axios.put(`http://localhost:3001/todos/${todo.id}`, {
      ...todo,
      completed: true,
    });
    onTodoUpdate();
  };

  const deleteTodo = async () => {
    await axios.delete(`http://localhost:3001/todos/${todo.id}`);
    onTodoUpdate();
  };

  return (
    <center>
      <ListItem
        style={{
          width: "90%",
          borderRadius: "5px",
          background: "#f2f2f2",
          marginBottom: "5px",
        }}
      >
        <ListItemText
          primary={todo.title}
          secondary={todo.completed ? "Done" : "Pending"}
        />
        <IconButton onClick={markAsDone}>
          <DoneIcon />
        </IconButton>
        <IconButton onClick={deleteTodo}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </center>
  );
};

export default TodoItem;