import { useState } from "react"
import { useDispatch } from 'react-redux'

function AddTodo() {

  const [Input, setInput] = useState("")
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div>AddTodo</div>
  )
}

export default AddTodo