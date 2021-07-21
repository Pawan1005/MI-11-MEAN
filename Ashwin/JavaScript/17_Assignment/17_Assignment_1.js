function submit() {
    var roll_number, name, math, Science, history, total, avg;
    var marks_value = true;
    name = document.getElementById("name").value;
    var upper_name = name.toUpperCase();
    roll_number = document.getElementById("rollno").value;
    math = parseInt(document.getElementById("math").value);
    Science = parseInt(document.getElementById("Science").value);
    history = parseInt(document.getElementById("History").value);
    try {
        if (isNaN(math)) {
            document.getElementById("math").style.backgroundColor = "red"; marks_value = false; throw "error";
        } 
        else if (isNaN(Science)) {
            document.getElementById( "Science").style.backgroundColor = "red";marks_value = false;throw "error";
        } 
        else if (isNaN(history)) { document.getElementById( "History").style.backgroundColor = "red"; marks_value = false;throw "error";
        }
    } catch (err) {
        alert("Marks cant be alpha numeric enter valid marks");
    }
    if (marks_value == true) {
        document.getElementById("math").style.backgroundColor = "white";
        document.getElementById("Science").style.backgroundColor = "white";
        document.getElementById("History").style.backgroundColor = "white";
        document.getElementById("demo" ).innerHTML = `<br> Name: ${upper_name} <br>Rollno:${roll_number}<br>Marks<br>Math:${math}<br>Science:${Science}<br>History:${history} `;
    } 
    else {
        document.getElementById("demo").innerHTML = "Marks cannot be alphanumeric, Enter the data again";
    }
}
