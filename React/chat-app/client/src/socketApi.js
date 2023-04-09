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

export  {init};