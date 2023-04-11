import React, { useState } from 'react'

const defaultItems = [
    { 
        name: "Item A"
    },
    { 
        name: "Item B"
    },
    { 
        name: "Item C"
    }
]
function Todo() {
    const [text, setText] = useState("")
    const [items, setItems] = useState(defaultItems)
    function handleClick() {
            setItems(
                (prevState) => [...prevState, {name: text}])    
                setText("")    
    }
    return (
        <div>
            <input 
            title='text-input'
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            />
            <button onClick={handleClick} >
                Add
            </button>

            <br /><br />
            {
                items.map((item, index) => {
                    return (
                        <div key={index}>
                            {item.name}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Todo