import React from 'react'
import { useSelector } from 'react-redux'

function TodoList() {
    //4. define state as a var with use selector 
    const items = useSelector(state => state.todos.items)
    console.log(items);

  return (
    <ul className="todo-list">
        {
            items.map((item) => {
            return(
            <li key={item.id} className={item.completed ? "completed" : ""}>
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>{item.title}</label>
                    <button className="destroy"></button>
                </div>
            </li>
        )})
        }
    </ul>
  )
}

export default TodoList