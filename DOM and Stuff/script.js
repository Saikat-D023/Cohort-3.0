
function addTodo(){
       
    const inputElements = document.getElementById("inputText")
    const textNode = document.createElement("h3");
    textNode.innerHTML = inputElements.value;
    const parentEl = document.getElementById("todos")
    parentEl.appendChild(textNode)

}
