import React from 'react'
import Footer from './Footer'
import Header from './Header'
import "./Style.css"
import ToDoItems from './ToDoItems'
function ToDo() {
    return (
        <div  class="todoapp">
                <Header/>
                <ToDoItems/>
                <Footer/>
        </div>
    )
}

export default ToDo