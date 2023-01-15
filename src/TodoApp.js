import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import useTextState from "./Hooks/useTextState";
import useTodoState from "./Hooks/useTodoState";

import Button from '@mui/material/Button';

const TodoApp= (props) => {
  const initialTodos = 
      [ 
        {
          id: 1,
          data: "Do materail UI",
          completed: false
        }
      ]

  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );
  return(
     <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
        <AppBar color='primary' position='static' style={{ height: "64px" }}>
          <Toolbar>
            <Typography color='inherit'>TODOS WITH HOOKS</Typography>
          </Toolbar>
        </AppBar>
        <Grid container alignItems="center" justifyContent="center"style={{ marginTop: "1rem" }}>
          <Grid item xs={11} md={8} lg={6}>
            <TodoForm addTodo={addTodo} />
            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
          </Grid>
        </Grid>
      </Paper>
    );
}

export default TodoApp;