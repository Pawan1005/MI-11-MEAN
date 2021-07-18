function alphaNum() {
    function alphaDash(str) {
        regExp = /^[a-zA-Z0-9/\-\_]+$/;
        if (regExp.test(str)) {
            document.getElementById("show").innerHTML = "Alpha Dash Uderscore";
        } else {
            document.getElementById("show").innerHTML = "not Alpha Dash Uderscore";
        }
    }
    var regExp, str;
    str = document.getElementById("input").value;
    alphaDash(str);
}
