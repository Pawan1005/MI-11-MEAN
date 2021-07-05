function proceed() {
    let numOfInputs = parseInt(document.getElementById("numOfInputs").value),
        inputsContainer = document.getElementById("inputsContainer");
    inputsContainer.innerHTML = "";
    for (let i = 0; i < numOfInputs; i++) {
        inputsContainer.innerHTML += `<div>Marks ${i + 1} : <input type="text" class="marks" /></div>`;
    }
    inputsContainer.innerHTML += `<button onclick="display()">Display</button>`;
}
function inputToArray() {
    let marks = document.getElementsByClassName("marks"),
        arr = [];
    for (let i = 0; i < marks.length; i++) {
        arr.push(parseInt(marks[i].value));
    }
    return arr;
}
function display() {
    result.innerHTML += "<span>Marks</span>";
    result = document.getElementById("result");
    let arr = inputToArray();
    for (let i = 0; i < arr.length; i++) {
        result.innerHTML += `Marks ${i + 1} : ${parseInt(arr[i])} <br>`;
    }
}
