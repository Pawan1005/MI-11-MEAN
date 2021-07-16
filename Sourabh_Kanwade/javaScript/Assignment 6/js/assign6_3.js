let arr = [],
    sum = 0;
let container = document.getElementById("container");

while (true) {
    let temp = prompt("Enter a number ");
    if (temp == "X" || temp == "x" || temp == null) break;
    temp = parseInt(temp);
    arr.push(temp);
}
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
container.innerHTML += `<div>Sum : ${sum}</div>`;
