
let subjects = document.getElementsByClassName("subjects");
let result = document.getElementById("result");
let arr = [];
function calculate() {
    result.innerHTML = "";
    arr = [];
    for (let i = 0; i < subjects.length; i++) {
        subjects[i].style.border = "1px solid ";
        if (parseInt(subjects[i].value) <= 80) {
            arr.push(parseInt(subjects[i].value));
        } else {
            subjects[i].style.border = "2px solid red";
        }
    }
    console.log(arr);
    if (arr.length != 10) {
        alert("All values must be less than 80.");
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i] + arr[i] * 0.2);
        result.innerHTML += `<div>Total marks ${i + 1} : ${arr[i]}</div>`;
    }
    quickSort(arr, 0, 9);
    result.innerHTML += `<h2>Total marks after sort </h2>`;
    for (let i = 0; i < arr.length; i++) {
        result.innerHTML += `<div>Total marks ${i + 1} : ${arr[i]}</div>`;
    }
}
function partition(arr, low, high) {
    let pivot = arr[high],
        i = low - 1,
        temp;
    for (let j = low; j <= high; j++) {
        if (pivot > arr[j]) {
            i++;
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
    temp = arr[high];
    arr[high] = arr[i + 1];
    arr[i + 1] = temp;
    return i + 1;
}
function quickSort(arr, low, high) {
    if (low < high) {
        pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
