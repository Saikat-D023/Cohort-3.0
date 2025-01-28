import {WebSocketServer} from "ws";

const wss = new WebSocketServer({ port: 8080 });


//event handler
wss.on("connection", function(socket){

    console.log("user connected");
    setInterval(()=>{
        socket.send("Curr price of solana is"+ Math.random())
    }, 500)

    socket.on("message", (e) => {
        console.log(e.toString());
    })
})

  