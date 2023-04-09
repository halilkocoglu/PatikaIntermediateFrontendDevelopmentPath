import {createContext, useContext, useState} from "react"

const ChatContext =  createContext()

const ChatProvider = ({children}) => {
    const [messages, setMessages] = useState([])
    const values={
        messages,
        setMessages
    }
    return (
        <ChatContext.Provider>{children}</ChatContext.Provider>
    )
}

export {
    ChatProvider,
    ChatContext
}
