let btn = document.getElementById("second-max-btn"),
    result = document.getElementById("result");

btn.onclick = () => {
    let aRef = document.getElementById("a"),
        bRef = document.getElementById("b"),
        cRef = document.getElementById("c"),
        dRef = document.getElementById("d"),
        eRef = document.getElementById("e");
    let a = parseInt(aRef.value),
        b = parseInt(bRef.value),
        c = parseInt(cRef.value),
        d = parseInt(dRef.value),
        e = parseInt(eRef.value),
        max = Number.MIN_VALUE,
        secondMax = Number.MIN_VALUE;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    if (d > max) {
        max = d;
    }
    if (e > max) {
        max = e;
    }
    if (b != max && b > secondMax) {
        secondMax = b;
    }
    if (c != max && c > secondMax) {
        secondMax = c;
    }
    if (d != max && d > secondMax) {
        secondMax = d;
    }
    if (e != max && e > secondMax) {
        secondMax = e;
    }
    if (a == max) {
        aRef.classList.add("max");
    }
    if (b == max) {
        bRef.classList.add("max");
    }
    if (c == max) {
        cRef.classList.add("max");
    }
    if (d == max) {
        dRef.classList.add("max");
    }
    if (e == max) {
        eRef.classList.add("max");
    }
    if (a == secondMax) {
        aRef.classList.add("secondMax");
    }
    if (b == secondMax) {
        bRef.classList.add("secondMax");
    }
    if (c == secondMax) {
        cRef.classList.add("secondMax");
    }
    if (d == secondMax) {
        dRef.classList.add("secondMax");
    }
    if (e == secondMax) {
        eRef.classList.add("secondMax");
    }
    result.innerHTML = `Second Largest value is <span>${secondMax}</span>`;
    console.log(max, secondMax);
};
