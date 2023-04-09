import React, { useState } from 'react'
import styles from "./styles.module.css"

function ChatForm() {
    const [message, setMessage] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(message)
        setMessage("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input 
                className={styles.textInput} 
                type="text" 
                placeholder="Type your message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                />
            </form>
        </div>
    )
}

export default ChatForm