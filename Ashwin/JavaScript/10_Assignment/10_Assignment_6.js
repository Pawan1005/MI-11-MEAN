function validurl() {
    function url(str) {
        regExp = /^(https:\/\/www\.|http:\/\/www\.|www\.)[a-zA-Z0-9\-_$]+\.[a-zA-Z]{2,3}$/;
        if (regExp.test(str)) {
            document.getElementById("show").innerHTML = "Valid URL";
        } else {
            document.getElementById("show").innerHTML = "Invalid URL";
        }
    }
    var regExp, str;
    str = document.getElementById("input").value;
    url(str);
}
