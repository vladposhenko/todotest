import React, {FC} from 'react';
import {ITodo} from "../models/models";
import TodoItem from "./TodoItem";

interface ITodoList {
    todos: ITodo[],
    dispatch:any
}



const TodoList:FC<ITodoList> = ({todos, dispatch}) => {
    return (
        <div style={{ marginTop:'30px' }}>
            { todos.length > 0
            ? todos.map(todo => <TodoItem key={todo.id} todo={todo} dispatch={dispatch}/>)
            : (<div style={{ textAlign: 'center' }}>
                    Your todo list is empty!
                </div>)}
        </div>
    );
};

export default TodoList;