import React from "react"
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

import useTextState from "./Hooks/useTextState";

const TodoForm = ({addTodo}) => {
  const [value, handleChange, reset] = useTextState("")

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    addTodo(value);
    reset();
  }
  return(
    <Paper style= {{margin: "1rem 0", padding:"0 1rem"}}>
      <form onSubmit = {handleSubmit}>
        <TextField 
        value={value} onChange = {handleChange} margin="normal" label="Add new Todo" sx={{ width: 1 }}/>
      </form>
    </Paper>
  )
}

export default TodoForm