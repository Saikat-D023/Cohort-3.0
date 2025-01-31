import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket)=>{
    
    //whenver theres a new message on the server call this
    socket.on("message", (message) => {
        console.log("msg rececieved:  " + message.toString() );

        setTimeout(()=>{
            socket.send(message.toString() + ": sent from the server")
        }, 1000)
    })
})