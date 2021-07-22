let inp = document.getElementById("inp");
let result = document.getElementById("result");
let searchResult = document.getElementById("searchResult");
data = [];
for (let i = 0; i < 10; i++) {
    inp.innerHTML += `<div>Roll number : <input type="number" class="rolls"></div>
                        <div>Marks : <input type="number" class="marks"></div>`;
}
function check() {
    let marks = document.getElementsByClassName("marks");
    let rolls = document.getElementsByClassName("rolls");
    let error = false,
        mark;
    for (let i = 0; i < marks.length; i++) {
        mark = parseInt(marks[i].value);
        console.log(isNaN(mark), mark == NaN);
        if (mark > 50 || mark < 0 || isNaN(mark)) {
            error = true;
            marks[i].style = "border:1px solid red";
        } else {
            data.push([parseInt(rolls[i].value), mark]);
        }
    }
    if (error || data.length != 10) {
        alert("Invalid Marks");
    } else {
        for (let i = 0; i < data.length; i++) {
            data[i][1] = parseInt(data[i][1] + data[i][1] * 0.2);
        }
        data.sort((a, b) => {
            return b[1] - a[1];
        });
        for (let i = 0; i < data.length; i++) {
            result.innerHTML += `<div>${data[i][0]}</div><div>${data[i][1]} </div>`;
        }
    }
}
function search() {
    let searchItem = parseInt(document.getElementById("searchItem").value);
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] == searchItem) {
            searchResult.innerHTML = `<div>Roll No ${data[i][0]} has scored ${data[i][1]}</div>`;
            break;
        } else searchResult.innerHTML = `<div>Roll No ${searchItem} not found`;
    }
}
