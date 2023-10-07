import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button, Grid, Paper } from "@mui/material";

const TodoForm = ({ onNewTodo }) => {
  const [title, setTitle] = useState("");

  const addTodo = async () => {
    const newTodo = { id: uuidv4(), title, completed: false };
    await axios.post("http://localhost:3001/todos", newTodo);
    setTitle("");
    onNewTodo();
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={10} margin={"80px auto 60px auto"}>
          <Paper elevation={1}>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              spacing={2}
              padding={"20px"}
            >
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  label="New Todo"
                />
              </Grid>
              <Grid item xs={3}>
                <Button
                  fullWidth
                  onClick={addTodo}
                  variant="contained"
                  color="primary"
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default TodoForm;