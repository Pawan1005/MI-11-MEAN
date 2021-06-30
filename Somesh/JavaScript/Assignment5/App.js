function checkDigit() {
    let number = parseInt(document.getElementById("que1-input").value);
    if (number < 1000) {
        let tempNum = number;
        let sum = 0;
        let last = tempNum % 10;
        tempNum = parseInt(tempNum / 10);
        let middle = tempNum % 10;
        let first = parseInt(tempNum / 10);
        if (first + last == middle) {
            document.getElementById("que1-output").innerText = `Sum Match`;
        } else {
            document.getElementById(
                "que1-output"
            ).innerText = `Sum Doesn't Match`;
        }
    } else {
        document.getElementById(
            "que1-output"
        ).innerText = `${number}  is 3digit`;
    }
}
function fib() {
    let number = parseInt(document.getElementById("fib-input").value);
    let prev = 0;
    let fibNum = 1;
    let temp = 0;
    let arr = [0, 1]; //Adding 0 and 1 already as the 0 and 1 cannot be added logically
    console.log(prev);
    for (let i = 0; i <= number - 3; i++) {
        console.log(fibNum);
        temp = fibNum + prev;
        prev = fibNum;
        fibNum = temp;
        arr.push(fibNum);
        document.getElementById("fib-output").innerHTML = `${arr}`;
    }
}
function listPrime() {
    var temp;
    let from = parseInt(document.getElementById("num-from-input").value);
    let to = parseInt(document.getElementById("num-to-input").value);
    let primeNums = [];
    for (let i = from; i <= to; i++) {
        // temp = isPrime;
        if (isPrime(i)) {
            primeNums.push(i);
        }
    }
    document.getElementById("prime-list-output").innerText = primeNums;
}
function isPrime(num) {
    let result;
    for (let i = 2; i <= 7; i++) {
        if (num % i == 0 && num != i) {
            result = false;
            break;
        } else {
            result = true;
        }
    }
    return result;
}
function sumAndProduct() {
    let num = parseInt(document.getElementById("even-odd-input").value);
    let tempNum = num;
    let rem;
    let evenFlag = false;
    let oddFlag = false;
    let sum = 0;
    let product = 1;
    if (num < 99999) {
        document.getElementById("even-odd-output").innerHTML =
            "Please enter 6 digit num";
    } else {
        evenFlag = true;
        while (tempNum > 0) {
            if (evenFlag) {
                rem = tempNum % 10;
                tempNum = parseInt(tempNum / 10);
                sum += rem;
                evenFlag = false;
                oddFlag = true;
            } else if (oddFlag) {
                rem = tempNum % 10;
                tempNum = parseInt(tempNum / 10);
                product *= rem;
                oddFlag = false;
                evenFlag = true;
            }
        }
        document.getElementById("even-odd-output").innerText = `Sum=${sum}
            Product=${product}
            `;
    }
}
function printTriangle() {
    let str = "";
    let data = 1;
    for (let i = 1; i < 5; i++) {
        for (let j = 1; j <= i; j++) {
            str += ` ${data++} `;
        }
        str += `<br>`;
    }
    document.getElementById("floyed-output").innerHTML = str;
}
