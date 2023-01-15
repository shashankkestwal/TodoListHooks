import {useState} from "react"
import EditIconForm from "./EditTodoForm"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";



const Todo = ({task, id,  completed, deleteTodo, toggleTodo, editTodo}) => {
  const [isEditing, setEditToggle] = useState(false);
  const toggleEdit = () =>{
    setEditToggle(!isEditing);
  }

  return(
        <ListItem>
          {isEditing ? 
          <EditIconForm id={id} editTodo={editTodo} task={task} toggleEdit={toggleEdit}/> 
          :
            <>
            <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
            <ListItemText style={{textDecoration: completed?"line-through":"none"}}>{task}</ListItemText>
            <ListItemSecondaryAction>
              <IconButton onClick={() => deleteTodo(id)}>
                <DeleteIcon aril-label="delete"  />
              </IconButton>
              <IconButton onClick={toggleEdit}>
                <EditIcon aril-label="edit" />
              </IconButton>
            </ListItemSecondaryAction>
            </>
          } 
        </ListItem>

    )
}

export default Todo