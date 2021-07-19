let arr = new Array(5);
let container = document.getElementById("container");
for (let i = 0; i < 5; i++) {
    arr[i] = prompt("Enter a name:" + (i + 1));
}
container.innerHTML += `<div>${arr}</div>`;
for (let i = 0; i < 5; i++) {
    container.innerHTML += `<div>Name ${i + 1} : ${arr[i]}</div>`;
}
