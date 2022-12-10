import React from 'react';
import './App.css';
import TodoControls from "./components/TodoControls";
import TodoList from "./components/TodoList";
import {useAppDispatch, useAppSelector} from "./app/hooks";
import styled from "styled-components";


const Container = styled.div`
  max-width: 575px;
  margin: 50px auto;
  background-color: rgba(243, 240, 240, 0.74);
  padding: 20px;
`


function App() {
  const todos = useAppSelector(state => state.todos.todos)
  const dispatch = useAppDispatch()

  return (
    <div className="App">
          <Container>
            <h3>Todos ( {todos.length} ) </h3>
            <TodoControls dispatch={dispatch} todos={todos}/>
            <TodoList dispatch={dispatch} todos={todos}/>
          </Container>
    </div>
  );
}

export default App;
