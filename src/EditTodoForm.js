import TextField from "@mui/material/TextField";
import useTextState from "./Hooks/useTextState"
const EditTodoForm = ({id, editTodo, task, toggleEdit}) => {
  const [value, handleChange, reset] = useTextState(task);

  return(
    <form onSubmit={e=>{
      e.preventDefault();
      editTodo(id, value);
      reset();
      toggleEdit();
    }} style={{minWidth:"90%"}}>
    <TextField 
        value={value} onChange = {handleChange} margin="normal" label="Edit Todo" sx={{ width: 1 }}/>
    </form>
    )
}

export default EditTodoForm