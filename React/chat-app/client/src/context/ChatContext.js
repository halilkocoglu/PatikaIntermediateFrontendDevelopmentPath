import {createContext, useContext, useState} from "react"

const ChatContext =  createContext()

const ChatProvider = ({children}) => {
    const [messages, setMessages] = useState([
        {message: "Hello"}, 
        {message: "What's up?"}
    ]);
    const values={
        messages,
        setMessages
    };
    return (
        <ChatContext.Provider value={values}>{children}</ChatContext.Provider>
    )
}
const useChat = () => useContext(ChatContext)

export {
    ChatProvider,
    useChat
}
