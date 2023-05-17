import React, { useState } from 'react'
import {addTodo} from '../redux/todos/todosSlice'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

function Form() {
  const [textInput, setTextInput] = useState("")
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    //nano id is an id generator library under '@reduxjs/toolkit'
    dispatch(addTodo({ id: nanoid(), title: textInput, completed: false }))
    setTextInput("")
  }
  return (
    <form onSubmit={handleSubmit}>
        <input 
        className="new-todo" 
        placeholder="What needs to be done?" 
        autoFocus
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        />
    </form>
  )
}

export default Form