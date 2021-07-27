let arr = [];
let container = document.getElementById("container");
while (true) {
    let temp = prompt("Enter a name ");
    if (temp == "X" || temp == "x" || temp == null) break;
    arr.push(temp);
}
container.innerHTML += ` <div>${arr.join("~")}</div>`;
container.innerHTML += ` <div>${arr.sort()}</div>`;
container.innerHTML += ` <div>${arr.reverse()}</div>`;
