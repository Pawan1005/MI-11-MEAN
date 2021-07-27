function alpha() {
    function alphaNumric(str) {
        regExp = /^[A-Za-z0-9]+$/;
        if (regExp.test(str)) {
            document.getElementById("show").innerHTML = "Alpha Numeric";
        } else {
            document.getElementById("show").innerHTML = "not Alpha Numeric";
        }
    }
    var regExp, str;
    str = document.getElementById("input").value;
    alphaNumric(str);
}
