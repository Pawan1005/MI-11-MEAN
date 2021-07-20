function evenodd() {
    var num;
    num = parseInt(document.getElementById("input").value);
    if (isNaN(num)) {
        alert("Enter numbers only !!!");
    } else {
        if (num % 2 == 0) {
            document.getElementById("show").innerHTML = "Given No. is EVEN";
        } else {
            document.getElementById("show").innerHTML = "Given No. is ODD";
        }
    }
}