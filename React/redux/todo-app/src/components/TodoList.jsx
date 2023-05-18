import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, toggleTodo } from '../redux/todos/todosSlice';


function TodoList() {
    //4. define state as a var with use selector 
    const dispatch = useDispatch()
    const items = useSelector(state => state.todos.items)
    const activeFilter = useSelector(state => state.todos.activeFilter)

    const handleDelete= (item) => {
        if(window.confirm(`Are you sure you want to delete '${item.title}' task?`)){
            dispatch(deleteTodo(item.id))
        }
    };
let filtered = items;
    if ( activeFilter !== 'all') {
        filtered = items.filter(item => 
            activeFilter === 'active'
            ? item.completed === false 
            : item.completed === true 
            )
    }
    console.log(items);
  return (
    <ul className="todo-list">
        {
            filtered.map((item) => {
            return(
            <li key={item.id} className={item.completed ? "completed" : ""}>
                <div className="view">
                    <input 
                    className="toggle" 
                    type="checkbox" 
                    checked= { item.completed }
                    onChange={() => dispatch(toggleTodo(item.id))}
                    />
                    <label>{item.title}</label>
                    <button 
                    className="destroy"
                    onClick={() => handleDelete(item)}
                    ></button>
                </div>
            </li>
        )})
        }
    </ul>
  )
}

export default TodoList