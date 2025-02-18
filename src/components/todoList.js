import React, { useState } from 'react'
import TodoItem from './todoItem';

export default function TodoList() {
    const [ todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = (e) => {
        // e.preventDefault()
        const newTodo = {id: Math.random(), text:inputValue }
        setTodos((values)=> [...values, newTodo]);
        setInputValue('');
    }
    const removeTodo = (id)=> {
        setTodos(todos.filter((todo)=> todo.id !== id))
    }
  return (
    <div>
        <form>
            <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
            <input type='button' value="Enter" onClick={addTodo} /> 
        </form>
        <div>
            {todos.map((t)=> (
                <TodoItem key={t.id} todo={t} removeTodo={removeTodo}/>
            ))}
        </div>
    </div>
  )
}
