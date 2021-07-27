function isPalindrom(
    num = parseInt(prompt("Enter Number to check Palindrom"))
) {
    let result;
    let rem;
    let tempNum = num;
    let createdNum = 0;
    document.getElementById("que1-input").innerText = num;
    while (tempNum > 0) {
        rem = tempNum % 10;
        tempNum = parseInt(tempNum / 10);
        createdNum = createdNum * 10 + rem;
    }
    if (createdNum === num) {
        document.getElementById(
            "que1-output"
        ).innerText = `${num} is Palindrom`;
        result = true;
    } else {
        document.getElementById(
            "que1-output"
        ).innerText = `${num} is Not Palindrom`;
        result = false;
    }
    return result;
}
function isPrime(num) {
    let result;
    for (let i = 2; i < num; i++) {
        if (num % i == 0 && num != i) {
            result = false;
            break;
        } else {
            result = true;
        }
    }
    return result;
}
function isPalindromPrime() {
    num = parseInt(prompt("Enter Number to check Palindrom"));
    document.getElementById("que2-input").innerText = num;

    let pln = isPalindrom(num);
    let prm = isPrime(num);
    if (pln && prm) {
        document.getElementById(
            "que2-output"
        ).innerText = `${num} is Palindrom and Prime`;
    } else {
        document.getElementById(
            "que2-output"
        ).innerText = `${num} is not Palindrom and Prime`;
    }
}
function isStrPalindrom() {
    let str = prompt("Enter String to check Palindrom");
    document.getElementById("que4-input").innerText = str;
    if (str.split("").reverse().join("") === str) {
        document.getElementById(
            "que4-output"
        ).innerText = `${str} is Palindrom`;
    } else {
        document.getElementById(
            "que4-output"
        ).innerText = `${str} is Not Palindrom`;
    }
}
function findDouble() {
    let str = prompt("Enter String ");
    document.getElementById("que5-input").innerText = str;

    let double;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            document.getElementById(
                "que5-output"
            ).innerText = `found double of ${str[i]}`;
            break;
        } else {
            document.getElementById(
                "que5-output"
            ).innerText = `found double none`;
        }
    }
}
function wrodCount() {
    let sentance = prompt("Enter Sentance to count words");
    document.getElementById("que6-input").innerText = sentance;
    console.log(sentance.split(" ").length);
    document.getElementById("que6-output").innerText = `${
        sentance.split(" ").length
    } words`;
}
