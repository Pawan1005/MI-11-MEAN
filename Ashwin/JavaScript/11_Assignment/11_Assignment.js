var roll_no = [],
    marks = [];
function display_marks() {
    function decending(num) {
        var temp, len;
        len = num.length;
        for (let i = 0; i < len; ++i) {
            for (let j = i + 1; j < len; ++j) {
                if (num[i] < num[j]) {
                    temp = num[i];
                    num[i] = num[j];
                    num[j] = temp;
                }
            }
        }
    }
    function total(marks) {
        let n = marks[i];
        let x = (n * 20) / 100;
        marks[i] = n + x;
        marks[i] = parseInt(marks[i]);
    }
    var input = [],
        l = 1,
        m = 1,
        n,
        count = 0;
    roll_no[0] = parseInt(document.getElementById("one").value);
    roll_no[1] = parseInt(document.getElementById("two").value);
    roll_no[2] = parseInt(document.getElementById("three").value);
    roll_no[3] = parseInt(document.getElementById("four").value);
    roll_no[4] = parseInt(document.getElementById("five").value);
    roll_no[5] = parseInt(document.getElementById("six").value);
    roll_no[6] = parseInt(document.getElementById("seven").value);
    roll_no[7] = parseInt(document.getElementById("eight").value);
    roll_no[8] = parseInt(document.getElementById("nine").value);
    roll_no[9] = parseInt(document.getElementById("ten").value);
    marks[0] = parseInt(
        (input[0] = document.getElementById("firstnumber").value)
    );
    marks[1] = parseInt(
        (input[1] = document.getElementById("secondnumber").value)
    );
    marks[2] = parseInt(
        (input[2] = document.getElementById("thirdnumber").value)
    );
    marks[3] = parseInt(
        (input[3] = document.getElementById("fourthnumber").value)
    );
    marks[4] = parseInt(
        (input[4] = document.getElementById("fifthnumber").value)
    );
    marks[5] = parseInt(
        (input[5] = document.getElementById("sixthnumber").value)
    );
    marks[6] = parseInt(
        (input[6] = document.getElementById("seventhnumber").value)
    );
    marks[7] = parseInt(
        (input[7] = document.getElementById("eightnumber").value)
    );
    marks[8] = parseInt(
        (input[8] = document.getElementById("ninenumber").value)
    );
    marks[9] = parseInt(
        (input[9] = document.getElementById("tenthnumber").value)
    );
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < "0" || marks[i] > "50" || input[i].length == 0) {
            alert("Error ??? Invalid Marks!!!");
            count++;
            break;
        }
    }
    if (count == 1) {
        if (marks[0] < "0" || marks[0] > "50" || input[0].length == "0") {
            firstnumber.style = "border: 1px solid red;";
        }
        if (marks[1] < "0" || marks[1] > "50" || input[1].length == "0") {
            secondnumber.style = "border: 1px solid red;";
        }
        if (marks[2] < "0" || marks[2] > "50" || input[2].length == "0") {
            thirdnumber.style = "border: 1px solid red;";
        }
        if (marks[3] < "0" || marks[3] > "50" || input[3].length == "0") {
            fourthnumber.style = "border: 1px solid red;";
        }
        if (marks[4] < "0" || marks[4] > "50" || input[4].length == "0") {
            fifthnumber.style = "border: 1px solid red;";
        }
        if (marks[5] < "0" || marks[5] > "50" || input[5].length == "0") {
            sixthnumber.style = "border: 1px solid red;";
        }
        if (marks[6] < "0" || marks[6] > "50" || input[6].length == "0") {
            seventhnumber.style = "border: 1px solid red;";
        }
        if (marks[7] < "0" || marks[7] > "50" || input[7].length == "0") {
            eightnumber.style = "border: 1px solid red;";
        }
        if (marks[8] < "0" || marks[8] > "50" || input[8].length == "0") {
            ninenumber.style = "border: 1px solid red;";
        }
        if (marks[9] < "0" || marks[9] > "50" || input[9].length == "0") {
            tenthnumber.style = "border: 1px solid red;";
        }
    } else {
        for (i = 0; i < 10; i++) {
            document.getElementById("total_result").innerHTML +=
                `&ensp; Roll No &nbsp;: &ensp; <span style="color:red; font-size:18px;">${parseInt(
                    roll_no[i]
                )}</span> ` + "<br>";
            total(marks);
        }
        decending(marks);
        for (i = 0; i < 10; i++) {
            document.getElementById("total_result1").innerHTML +=
                `&ensp;&nbsp; Marks &nbsp;: &ensp; <span style="color:red; font-size:18px;">${parseInt(
                    marks[i]
                )}</span> ` + "<br>";
        }
        document.getElementById("after_sorting").innerHTML +=
            marks.join(" &nbsp; ") + "<br>";
    }
}
function search() {
    function searching(roll_no, size, num) {
        var index = 0;
        for (let i = 0; i < size; i++) {
            if (roll_no[i] == num) {
                index = i;
                return index;
            }
        }
    }
    var num, size;
    num = parseInt(document.getElementById("search").value);
    size = roll_no.length;
    let index = searching(roll_no, size, num);
    document.getElementById(
        "searching"
    ).innerHTML += ` Roll No &nbsp;<span style="color:blue; font-size:18px;">${num}</span>&nbsp; has scored &nbsp;<span style="color:red; font-size:18px;">${marks[index]}</span>&nbsp; marks`;
}
