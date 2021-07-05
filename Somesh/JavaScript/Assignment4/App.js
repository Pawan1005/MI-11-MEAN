function isArmstrong() {
    let number = parseInt(document.getElementById("armstrong-input").value);
    let tempNum = number;
    let rem = 0;
    total = 0;
    while (tempNum > 0) {
        rem = tempNum % 10;
        tempNum = parseInt(tempNum / 10);
        total += rem ** 3;
    }
    if (total == number) {
        document.getElementById(
            "armstrong-output"
        ).innerText = `${number} is armstrong`;
    } else {
        document.getElementById(
            "armstrong-output"
        ).innerText = `${number} is not armstrong`;
    }
}
function isAutomorphic() {
    let number = parseInt(document.getElementById("automorphic-input").value);
    if (number === (number * number) % 10) {
        document.getElementById(
            "automorphic-output"
        ).innerText = `${number} is automorphic`;
    } else {
        document.getElementById(
            "automorphic-output"
        ).innerText = `${number} is not automorphic`;
    }
}
function isKrishn() {
    let number = parseInt(document.getElementById("krishn-input").value);
    let tempNum = number;
    let rem;
    let sum = 0;
    while (tempNum > 0) {
        rem = tempNum % 10;
        tempNum = parseInt(tempNum / 10);
        sum += fact(rem);
    }
    if (sum == number) {
        document.getElementById(
            "krishn-output"
        ).innerText = `${number} is Krishanmurthy number`;
    } else {
        document.getElementById(
            "krishn-output"
        ).innerText = `${number} is not Krishanmurthy number`;
    }
}
function fact(number) {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}
function isVowel() {
    let char = document.getElementById("vowel-input").value;
    switch (char) {
        case "a":
            document.getElementById(
                "vowel-output"
            ).innerText = `${char} is Vowel`;
            break;
        case "e":
            document.getElementById(
                "vowel-output"
            ).innerText = `${char} is Vowel`;
            break;
        case "i":
            document.getElementById(
                "vowel-output"
            ).innerText = `${char} is Vowel`;
            break;
        case "o":
            document.getElementById(
                "vowel-output"
            ).innerText = `${char} is Vowel`;
            break;
        case "u":
            document.getElementById(
                "vowel-output"
            ).innerText = `${char} is Vowel`;
            break;
        default:
            document.getElementById(
                "vowel-output"
            ).innerText = `${char} is not Vowel`;
    }
}
function toCase() {
    let string = document.getElementById("case-input").value;
    for (let i = 0; i < string.length; i++) {
        if (isUpperCase(string.charAt(i))) {
            string[i] = string.charAt(i).toLowerCase();
        } else if (isLowerCase(string.charAt(i))) {
            string[i] = string.charAt(i).toUpperCase() + "hii";
        }
    }
}
function isUpperCase(char) {
    if (char.toUpperCase() === char) return true;
    else return false;
}
function isLowerCase(char) {
    if (char.toLowerCase() === char) return true;
    else return false;
}
