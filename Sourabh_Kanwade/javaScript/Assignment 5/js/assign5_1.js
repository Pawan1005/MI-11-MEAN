function sumCheckerString() {
    let num = document.getElementById("number").value;
    let result = document.getElementById("result");
    let len = num.length;
    if (len != 3) {
        result.classList.remove("error", "true");
        result.innerHTML = "Invalid Number!!Please enter a 3 digit number.";
        result.classList.add("error");
    } else if (parseInt(num[0]) + parseInt(num[2]) == parseInt(num[1])) {
        result.classList.remove("error", "true");
        result.innerHTML = "Sum match";
        result.classList.add("true");
    } else {
        result.classList.remove("error", "true");
        result.innerHTML = "Sum does not match";
        result.classList.add("error");
    }
}
