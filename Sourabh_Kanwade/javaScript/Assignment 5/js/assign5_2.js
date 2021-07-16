function fibSeries() {
    let num = parseInt(document.getElementById("num").value);
    let result = document.getElementById("result");
    let n1 = 0,
        n2 = 1,
        n3 = 0;
    while (num > 0) {
        result.innerHTML += `<div class="fibItem">${n1}</div>`;
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
        num--;
    }
}
