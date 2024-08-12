import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from '../features/todo/todoSlice'
import { DeleteOutlined } from "@ant-design/icons"


function MainTodo() {
  return (
    <section>
      <AddTodo />
      <Todos />
    </section>
  )
}

function AddTodo() {

  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e: any) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input type="text" className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Enter a Todo..." value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Todo</button>
    </form>
  )
}

function Todos() {

  const todos = useSelector((state: any) => state.todos)
  const dispatch = useDispatch()

  return (
    <div>
      <h6>Todos</h6>
      {
        todos.map((todo: any) => (
          <li key={todo.id} className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded" >
            <div className='text-white'>{todo.text}</div>
            <button onClick={() => dispatch(removeTodo(todo.id))} className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"><DeleteOutlined /></button>
          </li>
        ))
      }
    </div>
  )
}

export { AddTodo, MainTodo, Todos }







