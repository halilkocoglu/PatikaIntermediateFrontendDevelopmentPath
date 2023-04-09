import io from "socket.io-client"

let socket;

const init= () => {
    console.log("connecting..");
    socket = io.connect("http://localhost:3000",{
        transports: ["websocket"]
    });
    socket.on("connect", () => {
        console.log("connected");
    });
}
const sendMessage = (message) =>{
    if ( socket ) {
        socket.emit("new-message", message)
    }
} 

const subscribeChat = (cb) => {
    if(!socket) return;

    socket.on ("receive-message", (message) => {
        console.log("new-message:", message);
        cb(message);
    } )
}

const subscribeInitialsMessages = (cb) => {
    if(!socket) return;

    socket.on ("message-list", (messages) => {
        console.log("Initial:", messages);
        cb(messages);
    } )
}
export  {
    init,
    sendMessage,
    subscribeChat,
    subscribeInitialsMessages,
};