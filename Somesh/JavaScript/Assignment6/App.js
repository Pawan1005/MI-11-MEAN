//////////// Question1//////////
function displayName() {
    let names = [];
    const allInputs = document.getElementsByClassName("que1-input");
    console.log(allInputs);
    Array.from(allInputs).forEach((input) => {
        names.push(input.value);
    });

    let nameStr = "";
    names.forEach((name, index) => {
        nameStr += `Name ${index + 1} : ${name} <br />`;
    });

    document.getElementById("que1-output").innerHTML = nameStr;
}
//////////// Question2//////////
function multipleNames() {
    let names = [];
    let name;
    while (true) {
        name = prompt("Enter name or to exit type ('x') ");
        if (name === null || name === "x") {
            break;
        } else names.push(name);
    }
    document.getElementById("que2-output1").innerHTML = names.join("~");
    document.getElementById("que2-output2").innerHTML = names
        .join("~")
        .toUpperCase()
        .split("~")
        .sort();
    console.log(names);
    document.getElementById("que2-output3").innerHTML = names
        .join("~")
        .toUpperCase()
        .split("~")
        .sort()
        .reverse();
}
//////////// Question3//////////
function multipleSum() {
    let nums = [];
    let num;
    while (true) {
        num = parseInt(prompt("Enter number or to exit type ('x') "));
        if (num === null || isNaN(num)) {
            break;
        } else nums.push(num);
    }
    let sum = 0;
    nums.forEach((num) => {
        sum += num;
    });

    document.getElementById("que3-output").innerHTML = sum;
}
//////////// Question4//////////
function multipleFact() {
    let nums = [];
    let num;
    while (true) {
        num = parseInt(prompt("Enter number or to exit type ('x') "));
        if (num === null || isNaN(num)) {
            break;
        } else nums.push(num);
    }

    let sum = 0;
    nums.forEach((num) => {
        fact *= num;
        sum += fact(num);
    });

    document.getElementById("que4-output").innerHTML = sum;
}
//////////// Question5//////////
function multipleFactSort() {
    let nums = [];
    let num;
    while (true) {
        num = parseInt(prompt("Enter number or to exit type ('x') "));
        if (num === null || isNaN(num)) {
            break;
        } else nums.push(num);
    }
    let factArr = [];
    let sum = 0;
    nums.forEach((num) => {
        factArr.push(fact(num));
    });
    document.getElementById("que5-output").innerHTML = factArr.sort((a, b) => {
        return b - a;
    });
}
// Fact method
function fact(number) {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}
