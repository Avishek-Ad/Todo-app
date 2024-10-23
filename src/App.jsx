import React from 'react'
import TodoInput from './Components/TodoInput'
import { useState } from 'react'
import TodoList from './Components/TodoList'

const App = () => {
  const [todoList, setTodoList] = useState([])
  
  return (
    <div className="mx-auto border border-gray-300 rounded-md w-96 text-center relative top-20">
      <TodoInput todoList={todoList} setTodoList={setTodoList}/>
      <TodoList todoList={todoList} setTodoList={setTodoList}/>
    </div>
  )
}

export default App