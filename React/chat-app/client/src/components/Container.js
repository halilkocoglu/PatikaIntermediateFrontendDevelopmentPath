import React, { useEffect } from 'react'
import ChatList from './ChatList'
import ChatForm from './ChatForm'
import {init, subscribeChat} from '../socketApi'
import {useChat} from '../context/ChatContext'
function Container() {
    const {setMessages} = useChat()
    useEffect(() => {
        init()
        subscribeChat((message) => {
			setMessages((prevState) => [...prevState, { message }]);
		});
    },[])
    return (
        <div className='Container'>
            <ChatList />
            <ChatForm />
        </div>
    )
}

export default Container