let m1Btn = document.getElementById("m1"),
    m2Btn = document.getElementById("m2"),
    output1 = document.getElementById("out1"),
    output2 = document.getElementById("out2");
m1Btn.onclick = function () {
    let a = parseInt(document.getElementById("num1").value),
        b = parseInt(document.getElementById("num2").value),
        temp;
    temp = a;
    a = b;
    b = temp;
    output1.innerHTML = `After Swap A is <span>${a}</span> & B is <span>${b}</span>`;
};
m2Btn.onclick = function () {
    let a = parseInt(document.getElementById("num1").value),
        b = parseInt(document.getElementById("num2").value);
    a = a + b;
    b = a - b;
    a = a - b;
    output2.innerHTML = `After Swap A is <span>${a}</span> & B is <span>${b}</span>`;
};
