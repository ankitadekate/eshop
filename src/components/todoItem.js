import React from 'react'

export default function TodoItem({todo, removeTodo}) {
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={()=>removeTodo(todo.id)}>Remove</button>
    </div>
  )
}
