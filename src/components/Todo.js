import React from 'react'
import Todoitem from './Todoitem';

function Todo(props) {
  return (
    <div className="container">
        <h3 className="TodoList text-center my-3">List</h3>
            {props.todo.map((todo)=>{
                return <Todoitem todo = {todo} key ={todo.sno} onDelete = {props.onDelete}/>
            })}
    </div>
  )
}

export default Todo;