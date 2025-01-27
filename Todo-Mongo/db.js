const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new Schema({
    email: String,
    password: String,
    name: String
})

const Todo = new Schema({
    title: Schema,
    done: Boolean,
    userID: ObjectId
})

const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todo',Todo);

module.exports = {
    UserModel,
    TodoModel   
}
