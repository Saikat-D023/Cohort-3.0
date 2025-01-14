
function createComplexDOMElement(){
    const div = document.createElement("div")
    div.innerHTML = "<h1>random text</h1>"
    document.querySelector("body").appendChild(div)
}