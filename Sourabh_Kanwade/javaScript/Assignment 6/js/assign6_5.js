let arr = [],
    factorials = [];
let container = document.getElementById("container");
while (true) {
    let temp = prompt("Enter a name ");
    if (temp == "X" || temp == "x" || temp == null) break;
    temp = parseInt(temp);
    arr.push(temp);
}
for (let i = 0; i < arr.length; i++) {
    factorials.push(factorial(arr[i]));
}
function factorial(n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}
container.innerHTML += `<div>Factorials : ${factorials.sort(function (a, b) {
    return b - a;
})}</div>`;
