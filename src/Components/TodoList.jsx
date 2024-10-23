import React from 'react'
// import axios from 'axios'

const TodoList = ({todoList, setTodoList}) => {

    const handleRemove = (id) => {
        setTodoList(todoList.filter((todo) => todo.id != id))
    }

    const handleCheckboxChange = (id) => {
        console.log(`inside ${id}`)
        // setTodoList(todoList.map((todo) => {
        //     if(todo.id == id)
        //         todo.completed = !todo.completed
        //     //console.log(todo)
        //     return todo
        // }))
            // setTodoList(todoList.filter((todo) => todo.id != id))
            // setTodoList(...todoList, newObj)
    }

  return (
    <div className='flex justify-center'>
        <ul>
            {todoList.map(({name, completed, id}) => (
                <div className='flex w-80 border-b-2'>
                    <li key={id} className=' w-3/4'>{name}</li>
                    <input type="checkbox" checked={completed} id='listCheck' onClick={handleCheckboxChange(id)}/>
                    {/* <span onClick={handleCheckboxChange(id)}>{completed ? "done" : "not done"}</span> */}
                    <button onClick={() => handleRemove(id)} className=' w-1/4 hover:bg-slate-100'>x</button>
                </div>
            ))}
        </ul>
    </div>
  )
}

export default TodoList