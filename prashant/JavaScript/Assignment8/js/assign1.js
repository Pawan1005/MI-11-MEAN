let subjects = document.getElementsByClassName("subjects");
let result = document.getElementById("result");
let arr = [];
function calculate() {
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
    } else {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = parseInt(arr[i] + arr[i] * 0.2);
            result.innerHTML += `<div>Total marks ${i + 1} : ${arr[i]}</div>`;
        }
    }
}
