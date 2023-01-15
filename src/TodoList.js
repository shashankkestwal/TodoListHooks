import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Todo from "./Todo"
const TodoList = ({todos, removeTodo, toggleTodo, editTodo}) => {
  return(
    <Paper>
      <List>
      {todos.map((todo)=>
          <>
            <Todo 
              task={todo.data} 
              completed={todo.completed} 
              id={todo.id} key={todo.id} 
              deleteTodo={removeTodo} 
              toggleTodo={toggleTodo} 
              editTodo={editTodo}/>
            <Divider/>
          </>
        )}
      
      </List>
      
    </Paper>
    );
} 

export default TodoList