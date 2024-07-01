import React from 'react'

function Todoitem({todo, onDelete}) {
  return (
   <div>
        <h4>{todo.title}</h4>
        <button className='btn btn-sm btn-danger' onClick={onDelete}>Delete</button>
   </div>
  )
}

export default Todoitem