function submit() {
    var roll_number, name, math, Science, history, total, avg;
    name = document.getElementById("name").value;
    var upper_name = name.toUpperCase();
    roll_number = document.getElementById("rollno").value;
    math = parseInt(document.getElementById("math").value);
    Science = parseInt(document.getElementById("Science").value);
    history = parseInt(document.getElementById("History").value);
    if (isNaN(math)) {
        alert("Marks cant be alpha numeric");
        math = parseInt(prompt("enter marks again"));
    } else if (isNaN(Science)) {
        alert("Marks cant be alpha numeric");
        Science = parseInt(prompt("enter marks again"));
    } else if (isNaN(history)) {
        alert("Marks cant be alpha numeric");
        history = parseInt(prompt("enter marks again"));
    } else {
        alert("Marks are numeric");
    }
    total = (math + Science + history) / 3;
    avg = ((math + Science + history) / 300) * 100;
    avg = avg.toFixed(2);
    total = total.toFixed(2);
    document.write("***********REPORT CARD***************** <br>");
    document.write(
        `<br> Name: ${upper_name} <br>Rollno:${roll_number}<br>Marks<br>Math:${math}<br>Science:${Science}<br>History:${history}<br><b>Total:</b>${total} <br><b>Percentage :</b>${avg} `
    );
    if (avg >= 80) {
        document.write(
            "<b><br>Grade:</b>" + "<p style= 'color: green;'> A+ </p>"
        );
    } else if (avg < 80 && avg >= 60) {
        document.write(
            "<b><br>Grade:</b>" + "<p style= 'color: green;'> A </p>"
        );
    } else if (avg < 60 && avg >= 55) {
        document.write(
            "<b><br>Grade:</b>" + "<p style= 'color: orange;'> B+ </p>"
        );
    } else if (avg < 55 && avg >= 40) {
        document.write(
            "<b><br>Grade:</b>" + "<p style= 'color: orange;'> B </p>"
        );
    } else if (avg < 40) {
        document.write(
            "<b><br>Grade:</b>" + "<p style= 'color: red;'> No grade </p>"
        );
    } else {
        document.write("Enter valid Input");
    }
}
