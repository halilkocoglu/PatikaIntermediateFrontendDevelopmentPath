import {useState, useEffect} from 'react'
import Footer from './Footer'
import Header from './Header'
import "./Style.css"
import ToDoItems from './ToDoItems'
function ToDo() {

    const [items, setItems] = useState([
        { id: 1, text: "Learn HTML", completed: false },
        { id: 2, text: "Learn CSS", completed: false },
        { id: 3, text: "Learn Javascript", completed: false },
        { id: 4, text: "Learn React.JS", completed: false },
        { id: 5, text: "Find a Job", completed: false },
    ])
    useEffect(() => {
        console.log( items);
        
    }, [items])
    return (
        <div  className="todoapp">
                <Header items={items}/>
                <ToDoItems items={items} addItem={setItems} removeItem={setItems}/>
                <Footer items={items}/>
        </div>
    )
}

export default ToDo