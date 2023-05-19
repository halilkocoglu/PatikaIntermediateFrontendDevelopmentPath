import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, toggleTodo, selectFilteredTodos, getTodosAsync } from '../redux/todos/todosSlice';


function TodoList() {
    //4. define state as a var with use selector 
    const dispatch = useDispatch()
    const filteredTodos = useSelector(selectFilteredTodos)
    const isLoading = useSelector((state) => state.todos.isLoading)
    const error = useSelector((state) => state.todos.error)
    useEffect(() => {
        dispatch(getTodosAsync())
    }, [dispatch])
    


    const handleDelete= (item) => {
        if(window.confirm(`Are you sure you want to delete '${item.title}' task?`)){
            dispatch(deleteTodo(item.id))
        }
    };

    console.log(filteredTodos);

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>{error}</div>
    }
  return (
    <ul className="todo-list">
        {
            filteredTodos.map((item) => {
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