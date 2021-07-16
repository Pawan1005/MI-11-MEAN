function printNumbers() {
    let low = parseInt(document.getElementById("low").value);
    let high = parseInt(document.getElementById("high").value);
    let result = document.getElementById("result");
    for (let i = low + 1; i < high; i++) {
        result.innerHTML += `<div class="nums">${i}</div>`;
    }
}
