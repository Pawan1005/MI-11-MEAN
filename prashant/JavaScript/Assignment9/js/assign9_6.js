let result = document.getElementById("result");
function countWords() {
    let str = document.getElementById("str").value;
    let temp = str.trim().split(" ");
    result.innerHTML += `Total Words : ${temp.length}<br> Whitespaces : ${temp.length - 1}`;
}
