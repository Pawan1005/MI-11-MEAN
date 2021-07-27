function checkUppercase() {
    var regExp, str;
    str = document.getElementById("input").value;
    regExp = /^[A-Z]/;
    if (regExp.test(str)) {
        document.getElementById("show").innerHTML = "string is in uppercase";
    } else {
        document.getElementById("show").innerHTML = "string is not in UPPERCASE";
    }
}
