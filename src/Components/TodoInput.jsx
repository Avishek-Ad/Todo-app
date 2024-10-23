import React, { useState } from 'react'

const TodoInput = ({todoList, setTodoList}) => {
    const [newTodo, setNewTodo] = useState(null)
    const [isCompleted, setIsCompleted] = useState(false)

    const handleClick = () => {
        const todo = {name:newTodo, completed:isCompleted, id:Math.floor(Math.random()*10)}
        setTodoList([...todoList, todo])
        setNewTodo('')
        setIsCompleted(false)
    }

  return (
    <div className="p-10 border-b-2">
      <h1 className='text-left m-5 text-2xl'>Todo List</h1>
      <input className='border-2'
        type='text'
        placeholder='New Todo'
        value = {newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className='m-3 hover:bg-blue-300 hover:rounded-lg hover:border-blue-400 hover:border-2' onClick={handleClick}>Submit</button>
      <label>
        Completed {" "}
      <input type="checkbox" id="inputCheckbox" checked={isCompleted} onChange={(e)=>setIsCompleted(!isCompleted)}/>
      </label>
    </div>
  )
}

export default TodoInput