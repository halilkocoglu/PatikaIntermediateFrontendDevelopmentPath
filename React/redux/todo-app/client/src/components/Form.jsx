import React, { useState } from 'react'
import {addTodo} from '../redux/todos/todosSlice'
import { useDispatch } from 'react-redux'

function Form() {
  const [textInput, setTextInput] = useState("")
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!textInput) return;
    //nano id is an id generator library under '@reduxjs/toolkit'
    dispatch(addTodo({ textInput }))
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