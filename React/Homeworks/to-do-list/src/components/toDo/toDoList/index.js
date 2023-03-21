import React from 'react'
import ToDoItems from '../toDoItems'

function ToDoList(props) {
    return (
        <div>
            <div className="listContainer">
        {props.items.map((item, index) => (
            <ToDoItems
            key={index}
            item={item}
            id={index}
            removeItem={() => props.removeItem(index)}
            setItems={props.setItems}
            />
        ))}
    </div>
        </div>
    )
}

export default ToDoList