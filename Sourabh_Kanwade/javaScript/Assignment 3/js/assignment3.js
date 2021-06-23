function clickHandler() {
    let buttons = document.getElementsByClassName("btn");
    let leap = isItLeap(),
        prime = isPrime(),
        even = isEven();
    if (leap) {
        buttons[0].classList.remove("success");
        buttons[0].classList.remove("fail");
        buttons[0].classList.add("success");
    } else {
        buttons[0].classList.remove("fail");
        buttons[0].classList.remove("success");
        buttons[0].classList.add("fail");
    }
    if (prime) {
        buttons[1].classList.remove("success");
        buttons[1].classList.remove("fail");
        buttons[1].classList.add("success");
    } else {
        buttons[1].classList.remove("fail");
        buttons[1].classList.remove("success");
        buttons[1].classList.add("fail");
    }
    if (even) {
        buttons[2].classList.remove("success");
        buttons[2].classList.remove("fail");
        buttons[2].classList.add("success");
    } else {
        buttons[2].classList.remove("fail");
        buttons[2].classList.remove("success");
        buttons[2].classList.add("fail");
    }
}
function isItLeap() {
    let year = parseInt(document.getElementById("year").value);
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return true;
    } else {
        return false;
    }
}
function isPrime() {
    let primeNumber = parseInt(document.getElementById("year").value);
    let isPrime = true;
    if (primeNumber == 0 || primeNumber == 1) {
        isPrime = false;
    } else {
        for (let i = 2; i < primeNumber; i++) {
            if (primeNumber % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}
function isEven() {
    let number = parseInt(document.getElementById("year").value);
    if (number % 2 == 0) return true;
    else return false;
}
function patternPrinter() {
    let rows = parseInt(document.getElementById("rows").value);
    let cols = parseInt(document.getElementById("cols").value);
    let pattern = document.getElementById("pattern");
    pattern.innerHTML = "";
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            pattern.innerHTML += "*";
        }
        pattern.innerHTML += "<br>";
    }
}
function factorial() {
    let number = parseInt(document.getElementById("factNum").value);
    let result = 1;
    if (number == 0) {
        result = 1;
    } else {
        for (let i = number; i > 0; i--) {
            result *= i;
        }
    }
    document.getElementById("factNum").value = `${number}! = ${result}`;
}
