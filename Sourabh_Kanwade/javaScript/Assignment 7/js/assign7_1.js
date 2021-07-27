let result = document.getElementById("result");
for (let i = 1; i < 7; i++) {
    for (let j = 1; j < i; j++) {
        result.innerHTML += ` ${j} `;
    }
    result.innerHTML += "1 <br>";
}
