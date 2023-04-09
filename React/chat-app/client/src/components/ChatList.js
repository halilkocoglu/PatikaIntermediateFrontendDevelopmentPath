import React from 'react'
import styles from "./styles.module.css"
import { useChat } from '../context/ChatContext'
import ChatItem from './ChatItem'
import ScrollableFeed from 'react-scrollable-feed'
function ChatList() {
    const {messages} = useChat()
    return (
        <div className={styles.chatlist}>
                <ScrollableFeed forceScroll={true}>
            <div>
                {
                    messages.map((item,key) => (
                        <ChatItem item = {item} key = {key} />
                    ))
                }
            </div>
                </ScrollableFeed>
        </div>
    )
}

export default ChatList