import {useState} from 'react'

function ToDoItems(addItem,items,removeItem) {
    const onCheck = () => {
        console.log("checked");
    };
    return (
        <div>
            <section className="main">
                    <input  className="toggle-all" type="checkbox" />
                    <label onClick={onCheck} htmlFor="toggle-all">
                        Mark all as complete
                    </label>

                    <ul className="todo-list">
                        <li className="completed">
                            <div className="view">
                                <input className="toggle" type="checkbox" />
                                <label>Learn JavaScript</label>
                                <button className="destroy"></button>
                            </div>
                        </li>
                        <li>
                            <div className="view">
                                <input className="toggle" type="checkbox" />
                                <label>Learn React</label>
                                <button className="destroy"></button>
                            </div>
                        </li>
                        <li>
                            <div className="view">
                                <input className="toggle" type="checkbox" />
                                <label>Have a life!</label>
                                <button className="destroy"></button>
                            </div>
                        </li>
                    </ul>
                </section>
        </div>
    )
}

export default ToDoItems