function secondlargest() {
    var num1, num2, num3, num4, num5;
    num1 = parseInt(document.getElementById("firstnumber").value);
    num2 = parseInt(document.getElementById("secondnumber").value);
    num3 = parseInt(document.getElementById("thirdnumber").value);
    num4 = parseInt(document.getElementById("fourthnumber").value);
    num5 = parseInt(document.getElementById("fifthnumber").value);
    if (num1 >= num2 && num1 >= num3 && num1 >= num4 && num1 >= num5) {
        if (num2 >= num3 && num2 >= num4 && num2 >= num5) {
            document.getElementById("second-largest").innerHTML = +num2;
        } else if (num3 >= num2 && num3 >= num4 && num3 >= num5) {
            document.getElementById("second-largest").innerHTML = +num3;
        } else if (num4 >= num2 && num4 >= num3 && num4 >= num5) {
            document.getElementById("second-largest").innerHTML = +num4;
        } else {
            document.getElementById("second-largest").innerHTML = +num5;
        }
    } else if (num2 >= num1 && num2 >= num3 && num2 >= num4 && num2 >= num5) {
        if (num1 >= num3 && num1 >= num4 && num1 >= num5) {
            document.getElementById("second-largest").innerHTML = +num1;
        } else if (num3 >= num1 && num3 >= num4 && num3 >= num5) {
            document.getElementById("second-largest").innerHTML = +num3;
        } else if (num4 >= num1 && num4 >= num3 && num4 >= num5) {
            document.getElementById("second-largest").innerHTML = +num4;
        } else {
            document.getElementById("second-largest").innerHTML = +num5;
        }
    } else if (num3 >= num1 && num3 >= num2 && num3 >= num4 && num3 >= num5) {
        if (num1 >= num2 && num1 >= num4 && num1 >= num5) {
            document.getElementById("second-largest").innerHTML = +num1;
        } else if (num2 >= num1 && num2 >= num4 && num2 >= num5) {
            document.getElementById("second-largest").innerHTML = +num2;
        } else if (num4 >= num1 && num4 >= num2 && num4 >= num5) {
            document.getElementById("second-largest").innerHTML = +num4;
        } else {
            document.getElementById("second-largest").innerHTML = +num5;
        }
    } else if (num4 >= num1 && num4 >= num2 && num4 >= num3 && num4 >= num5) {
        if (num1 >= num2 && num1 >= num3 && num1 >= num5) {
            document.getElementById("second-largest").innerHTML = +num1;
        } else if (num2 >= num1 && num2 >= num3 && num2 >= num5) {
            document.getElementById("second-largest").innerHTML = +num2;
        } else if (num3 >= num1 && num3 >= num2 && num3 >= num5) {
            document.getElementById("second-largest").innerHTML = +num3;
        } else {
            document.getElementById("second-largest").innerHTML = +num5;
        }
    } else {
        if (num1 >= num2 && num1 >= num3 && num1 >= num4) {
            document.getElementById("second-largest").innerHTML = +num1;
        } else if (num2 >= num1 && num2 >= num3 && num2 >= num4) {
            document.getElementById("second-largest").innerHTML = +num2;
        } else if (num3 >= num1 && num3 >= num2 && num3 >= num4) {
            document.getElementById("second-largest").innerHTML = +num3;
        } else {
            document.getElementById("second-largest").innerHTML = +num4;
        }
    }
}
