function checkemail() {
    var regExp, str;
    str = document.getElementById("input").value;
    regExp = /[a-zA-Z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}/;
    if (regExp.test(str)) {
        document.getElementById("show").innerHTML = "Valid Email Address";
    } else {
        document.getElementById("show").innerHTML = "not an Valid Email Address";
    }
}
