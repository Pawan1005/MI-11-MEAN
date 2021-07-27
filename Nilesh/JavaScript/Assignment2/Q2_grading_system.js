function result() {
    var sub1, sub2, sub3, sub4, sub5, total, percentage, grade;
    sub1 = parseInt(document.getElementById("firstnumber").value);
    sub2 = parseInt(document.getElementById("secondnumber").value);
    sub3 = parseInt(document.getElementById("thirdnumber").value);
    sub4 = parseInt(document.getElementById("fourthnumber").value);
    sub5 = parseInt(document.getElementById("fifthnumber").value);
    total = sub1 + sub2 + sub3 + sub4 + sub5;
    percentage = total / 5;
    document.getElementById("total").innerHTML = +total;
    document.getElementById("percentage").innerHTML = +percentage;
    if (percentage >= 75) {
        document.getElementById("grade").innerHTML = "A";
    } else if (percentage >= 60 && percentage < 75) {
        document.getElementById("grade").innerHTML = "B";
    } else if (percentage >= 40 && percentage < 60) {
        document.getElementById("grade").innerHTML = "C";
    } else if (percentage >= 30 && percentage < 40) {
        document.getElementById("grade").innerHTML = "D";
    } else if (percentage < 30) {
        document.getElementById("grade").innerHTML = "F";
    }
}
