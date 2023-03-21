import {useState} from 'react'

function Header(items) {
    const [task, setTask] = useState("")
    function handleInput(event) {
        setTask(event.target.value);
        
    }
    
    
    
    return (
        <div>
            <header className="header">
                    <h1>ToDos</h1>
                    <form >
                        <input className="new-todo" 
                        placeholder="What needs to be done?" 
                        
                        autoFocus />
                    </form>
                </header>
        </div>
    )
}

export default Header