function checkArmstrong() {
    let number = parseInt(document.getElementById("armstrong").value),
        originalNum = number,
        n = 0,
        result = 0;
    while (originalNum > 0) {
        originalNum = parseInt(originalNum / 10);
        n++;
    }
    originalNum = number;
    while (originalNum > 0) {
        let remainder = originalNum % 10;
        result += remainder ** n;
        originalNum = parseInt(originalNum / 10);
    }
    if (number == result) {
        document.getElementById("armstrong-radio").style = "background-color: greenyellow;";
    } else {
        document.getElementById("armstrong-radio").style = "background-color: red;";
    }
}
function checkAutomarphic() {
    let number = parseInt(document.getElementById("automarphic").value),
        square = number ** 2,
        remainder = square % 10;
    if (number == remainder) {
        document.getElementById("automarphic-radio").style = "background-color: greenyellow;";
    } else {
        document.getElementById("automarphic-radio").style = "background-color: red;";
    }
}
function checkKrishnamurthy() {
    let number = parseInt(document.getElementById("krishnamurthy").value),
        originalNum = number,
        result = 0;
    while (originalNum > 0) {
        let remainder = originalNum % 10;
        result += factorial(remainder);
        originalNum = parseInt(originalNum / 10);
    }
    if (number == result) {
        document.getElementById("krishnamurthy-radio").style = "background-color: greenyellow;";
    } else {
        document.getElementById("krishnamurthy-radio").style = "background-color: red;";
    }
}
function factorial(n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}
function checkVowel() {
    let letter = document.getElementById("letter").value,
        flag;
    switch (letter.toLowerCase()) {
        case "a":
            flag = true;
            break;
        case "e":
            flag = true;
            break;
        case "i":
            flag = true;
            break;
        case "o":
            flag = true;
            break;
        case "u":
            flag = true;
            break;
        default:
            flag = false;
            break;
    }
    if (flag) {
        document.getElementById("letter-radio").style = "background-color: greenyellow;";
    } else {
        document.getElementById("letter-radio").style = "background-color: red;";
    }
}
function toggleCase() {
    let str = document.getElementById("textIn").value;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) != str.charAt(i).toLowerCase()) {
            str = str.replace(str.charAt(i), str.charAt(i).toLowerCase());
        } else {
            str = str.replace(str.charAt(i), str.charAt(i).toUpperCase());
        }
    }
    document.getElementById("textOut").value = str;
}
