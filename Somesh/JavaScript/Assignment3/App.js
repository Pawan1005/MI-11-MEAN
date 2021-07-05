/* Code for the Pattern Program */
const rowNumInput = document.getElementById("rownum");
const colNumInput = document.getElementById("colnum");
const patternOutput = document.getElementById("pattern-output");
function printPattern() {
    let rows = rowNumInput.value;
    let cols = colNumInput.value;
    let output = "";
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            output += " * ";
        }
        output += " <br> ";
    }
    patternOutput.innerHTML = output;
}
/* Code for the Prime number */
function isPrime() {
    let num = parseInt(document.getElementById("num").value);

    for (let i = 2; i <= 7; i++) {
        if (num % i == 0 && num != i) {
            document.getElementById(
                "prime-output"
            ).innerHTML = `nope ${num} is not prime`;
            break;
        } else {
            document.getElementById(
                "prime-output"
            ).innerHTML = ` Yup ${num} is prime`;
        }
    }
}
function isLeap() {
    let year = parseInt(document.getElementById("year").value);

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        document.getElementById(
            "leap-output"
        ).innerHTML = `${year} is Leap year`;
    } else {
        document.getElementById(
            "leap-output"
        ).innerHTML = `nope ${year} is not Leap year`;
    }
    if (isNaN(year)) {
        document.getElementById(
            "leap-output"
        ).innerHTML = `nope ${year} is not even a year`;
    }
}
function isEven() {
    let number = parseInt(document.getElementById("even").value);

    if (number % 2 == 0) {
        document.getElementById(
            "even-output"
        ).innerHTML = `${number} is Even Number`;
    } else {
        document.getElementById(
            "even-output"
        ).innerHTML = `${number} is Odd Number`;
    }
}
function fact() {
    let number = parseInt(document.getElementById("fact").value);
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact = fact * i;
    }
    document.getElementById("fact-output").innerText = `Factorial = ${fact} `;
}
