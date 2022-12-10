import React, {FC} from 'react';
import {ITodo} from "../models/models";
import {useAppSelector} from "../app/hooks";
import {setInputValue, setTodo} from "../features/todos/todoSlice";
import styled from "styled-components";
import {Button} from "./UI/Button";
import {Input} from "./UI/Input";

interface ITodoControls {
    todos:ITodo[],
    dispatch:any,
}

const InputContainer = styled.div`
  display:flex;
  justify-content: center;
`

const TodoControls:FC<ITodoControls> = ({ todos, dispatch}) => {
    const inputValue = useAppSelector(state => state.todos.inputValue)
    const handleChange = (e: any) => {
        dispatch(setInputValue(e.target.value))
    }
    const handleSubmit = (e: any) => {
        let newTodo = {
            id:Date.now(),
            title:inputValue,
            isDone:false
        }
        return inputValue ? dispatch(setTodo(newTodo)) : alert('please enter some words')
    }
    return (
        <div>
            <InputContainer>
                <Input value={inputValue} onChange={handleChange}
                       placeholder="Enter todo here" />
                <Button onClick={handleSubmit} >Submit</Button>
            </InputContainer>
        </div>
    );
};

export default TodoControls;