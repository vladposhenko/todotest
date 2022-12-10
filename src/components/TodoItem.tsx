import React, {FC, useState} from 'react';
import {deleteTodo, toggleTodoStatus, updateTodo} from "../features/todos/todoSlice";
import {DeleteFilled, EditFilled} from "@ant-design/icons";
import {ITodo} from "../models/models";
import {Input} from "./UI/Input";
import styled from "styled-components";
import {Button} from "./UI/Button";


interface ITodoItem {
    todo:ITodo
    dispatch:any,
}

const ListItem = styled.div`
  padding: 8px 16px;
  border-block-end: 1px solid rgba(5, 5, 5, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.88);
`

const TodoItem:FC<ITodoItem> = ({todo, dispatch}) => {
    const [isEditMode, setEditMode] = useState<boolean>()
    const [editedValue, setEditedValue] = useState(todo.title)
    return (
        <ListItem>
            <input type="checkbox" onChange={(e:any) => dispatch(toggleTodoStatus(todo.id))}
                      checked={todo.isDone}></input>
            {isEditMode
                ?    <Input value={editedValue}
                            onChange={(e) => setEditedValue(e.target.value)}
                            onBlur={() => dispatch(updateTodo({
                    title:editedValue,
                    id:todo.id,
                }))}/>
                :   <div>{ todo.title }</div>
            }
            <div style={{gap: '10px', display:'flex'}}>
                <Button onClick={ () =>  setEditMode(!isEditMode)} > <EditFilled /> </Button>
                <Button onClick={() => dispatch(deleteTodo(todo.id))} > <DeleteFilled /> </Button>
            </div>
        </ListItem>
    );
};

export default TodoItem;