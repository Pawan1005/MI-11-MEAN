let btn = document.getElementById("btn"),
    avg = document.getElementById("avg"),
    tot = document.getElementById("tot"),
    grade = document.getElementById("grade");

btn.onclick = () => {
    let sub1 = parseInt(document.getElementById("sub1").value);
    let sub2 = parseInt(document.getElementById("sub2").value);
    let sub3 = parseInt(document.getElementById("sub3").value);
    let sub4 = parseInt(document.getElementById("sub4").value);
    let sub5 = parseInt(document.getElementById("sub5").value);
    let total = sub1 + sub2 + sub3 + sub4 + sub5;
    let average = total / 5;
    let percentage = parseInt((total / 500) * 100);
    tot.innerHTML = total;
    avg.innerHTML = average;

    if (percentage >= 75 && percentage <= 100) {
        grade.innerHTML = "A";
    } else if (percentage >= 60 && percentage <= 74) {
        grade.innerHTML = "B";
    } else if (percentage >= 59 && percentage <= 40) {
        grade.innerHTML = "C";
    } else if (percentage >= 30 && percentage <= 39) {
        grade.innerHTML = "D";
    } else {
        grade.innerHTML = "F";
    }
};
