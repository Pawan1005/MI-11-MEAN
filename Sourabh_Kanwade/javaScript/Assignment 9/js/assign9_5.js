let result = document.getElementById("result");
let letters = [];
function doubleLetter() {
    let str = document.getElementById("str").value;
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] == str[i + 1]) letters.push(str[i]);
    }
    for (let j = 0; j < letters.length; j++) {
        result.innerHTML += `<br>${letters[j]}`;
    }
}
