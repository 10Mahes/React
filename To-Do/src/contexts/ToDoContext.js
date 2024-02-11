import React,{useContext , createContext} from "react";

// Creating Context
export const ToDoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todomessage",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {}
});

export const useToDo = () => {
  return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider;