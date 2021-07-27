function creditcard() {
    var regExp, str;
    str = parseInt(document.getElementById("input").value);
    regExp = /^[0-9]{16}$/;
    if (regExp.test(str)) {
        document.getElementById("show").innerHTML = "Credit Card Number is Valid";
    } else {
        document.getElementById("show").innerHTML = "Invalid Credit Card Number !!";
    }
}
