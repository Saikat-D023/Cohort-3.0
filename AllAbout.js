//Functions in JS

function sum(a,b){
    return a + b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a/b;
}

function subtract(a,b){
    return a - b;
}

function doOperation(a,b,op){
    return op(a,b);
}

console.log(doOperation(100,2,divide));

//callbacks in JS

const fs = require("fs")

fs.readFile("a.txt", "utf-8", function(err,contents){
    console.log(contents)
})

//classes in JS

class Rectangle {
    constructor(width,height,color){
        this.width = width
        this.height = height
        this.color = color
    }

    area(){
        const area = this.width * this.height
        return area
    }
    paint(color){
        console.log(`Painting with color ${this.color}`)
    }
}

const rect = new Rectangle(5,100,'blue')
const area = rect.area();
console.log(area)
rect.paint()

//some more classes

const now = new Date()
console.log(now.toISOString())

//promises

Promise.all([
    Promise.resolve("Task 1 completed"),
    Promise.resolve("Task 2 completed"),
    Promise.reject("Task 3 failed")
])
    .then((results) => console.log(results))
    .catch((error) => console.error(error));
