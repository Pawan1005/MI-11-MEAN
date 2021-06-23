function isArmstrong() {
    let number = document.getElementById("armstrong-input").value;
    let tempNum = number;
    let rem = 0;
    total = 0;
    while (tempNum < 0) {
        rem = tempNum % 10;
        tempNum /= 10;
        total += rem ** 3;
        console.log(total, tempNum);
    }
}

/* Code for the Prime number */
