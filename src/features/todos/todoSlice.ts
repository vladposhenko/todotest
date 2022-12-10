import { createSlice } from '@reduxjs/toolkit';
import {ITodo} from "../../models/models";



export interface CounterState {
  todos:ITodo[],
  inputValue:string
}


const initialState: CounterState = {
  todos: [],
  inputValue:'',
};


export const todoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
      updateTodo: (state, {payload}) => {
          state.todos.map((t) => {
              if(t.id === payload.id) {
                  return t.title = payload.title
              }
          })
      },
      deleteTodo: (state, {payload}) => {
        state.todos = state.todos.filter((t) => t.id !== payload )
      },
      toggleTodoStatus: (state, { payload }) => {
          state.todos.map((t) => {
              if(t.id === payload) {
                  return t.isDone = !t.isDone
              }
          })
      },
      setInputValue: (state, {payload}) => {
        state.inputValue = payload
      },
      setTodo: (state, action) => {
        state.todos.push(action.payload)
        state.inputValue = ''
        localStorage.setItem('todosk23k4k23', JSON.stringify(state.todos))
      }
  }
});

export const { setTodo, setInputValue, toggleTodoStatus, deleteTodo, updateTodo } = todoSlice.actions;



export default todoSlice.reducer;
