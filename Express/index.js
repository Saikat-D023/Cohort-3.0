const express = require('express');
const jwt = require("jsonwebtoken");

const JWT_SECRET = "saikat358";
const app = express();
app.use(express.json())

const users = [];

app.post("/signup", (req,res) => {
    const username = req.body.username
    const password = req.body.password
    
    users.push({
            username,
            password
    })
    res.send({
        message: "you   have signed up"
    })
});

app.post("/signin", (req,res) => {
    const username = req.body.username
    const password = req.body.password
    
    const foundUser = users.find(user => user.username === username && user.password === password);

    if(!foundUser){
        res.json({
            message: "Credentials incorrect"
        })
        return
    }else{
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token: token
        })
    }
});

app.listen(3000)