function checkwords() {
    var regExp, str;
    str = document.getElementById("input").value;
    regExp = str.replace(/(^\s*)|(\s*$)/gi, "");
    regExp = regExp.replace(/[ ]{2,}/gi, " ");
    regExp = regExp.replace(/\n /, "\n");
    if (regExp != 0) {
        document.getElementById("show").innerHTML = regExp + "<br><br>";
        document.getElementById("show").innerHTML = regExp.split(" ").length;
    }
}
