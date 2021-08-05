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
    result = document.getElementById("result");
    let arr = inputToArray();
    result.innerHTML = "";
    result.innerHTML += "<div><span>Before Sorting : </span><br>";
    for (let i = 0; i < arr.length; i++) {
        result.innerHTML += `Marks ${i + 1} : ${parseInt(arr[i])} <br>`;
    }
    insertionSort(arr);
    result.innerHTML += "</div><div><span>After Sorting :</span><br>";
    for (let i = 0; i < arr.length; i++) {
        result.innerHTML += `Marks ${i + 1} : ${parseInt(arr[i])} <br>`;
    }
    result.innerHTML += "</div>";
}
function insertionSort(arr) {
    let j, key;
    result.innerHTML += "<div><span>Array after iterations:</span> <br>";
    for (let i = 1; i < arr.length; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && key > arr[j]) {
            arr[j + 1] = arr[j];
            j--;
            result.innerHTML += `Iteration : ${i + 1} : ${arr} <br>`;
        }
        arr[j + 1] = key;
    }
    result.innerHTML = `${result.innerHTML}</div>`;
}
