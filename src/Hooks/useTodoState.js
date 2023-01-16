import { useState } from "react";
import useLocalStorage from "./useLocalStorage"
import { v4 as uuid } from 'uuid';
const useTodoState = initialTodos => {
  const [todos, setTodos] = useLocalStorage("todos", initialTodos);
  return {
    todos,
    addTodo: newTodoText => {
      setTodos([...todos, { id: uuid(), data: newTodoText, completed: false }]);
    },
    removeTodo: todoId => {
      console.log(todoId)
      const updatedTodos = todos.filter(todo => todo.id !== todoId);
      setTodos(updatedTodos);
    },
    toggleTodo: todoId => {
      const updatedTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    },
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, data: newTask } : todo
      );
      setTodos(updatedTodos);
    }
  };
};

export default useTodoState;