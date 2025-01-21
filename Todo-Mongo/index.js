const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { UserModel , TodoModel } = require("./db");
const JWT_SECRET = "saikat123";

mongoose.connect("mongodb+srv://saikatdey358:dV0QerFRVEyxmEfA@cluster0.scmls.mongodb.net/todo-database-app");
const app = express();
app.use(express.json());

app.post("/signup", async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.insert({
        email: email,
        password: password,
        name: name
    })

    res.json({
        message: "You are signed up"
    })
});

app.post("/signin", async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    console.log(user);

    if(user){
        const token = jwt.sign({
            id: user._id
        });
        res.json({
            token: token
        })
    }else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
});

app.post("/todo", function(req,res){

});

app.get("/todos", function(req,res){

});

app.listen(3000)
