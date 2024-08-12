
import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {  // this is a state
  todos: [{ id: 1, text: "Hello World" }]
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo: { id: any, text: string } = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo: any) => todo.id !== action.payload)
    }
  }
}) // properties & functions comed to reducers


export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer




