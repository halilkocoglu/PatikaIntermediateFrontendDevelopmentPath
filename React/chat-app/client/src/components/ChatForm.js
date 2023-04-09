import React, { useState } from 'react'
import styles from "./styles.module.css"
import { sendMessage } from '../socketApi'
import { useChat } from '../context/ChatContext'

function ChatForm() {
    const [message, setMessage] = useState("")
    const {setMessages} = useChat()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(message)

        setMessages((preState) => [...preState, {message, fromMe:true} ] )
        sendMessage(message)
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