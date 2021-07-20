function checkUpper() {
    let str = document.getElementById("u-input").value;
    let res = document.getElementById("u-result");
    if (/^[A-Z]/.test(str)) {
        res.style.backgroundColor = "green";
    } else {
        res.style.backgroundColor = "red";
    }
}
function checkCredit() {
    let str = document.getElementById("c-input").value;
    let res = document.getElementById("c-result");
    if (/^\d{18}$/.test(str)) {
        res.style.backgroundColor = "green";
    } else {
        res.style.backgroundColor = "red";
    }
}
function checkEmail() {
    let str = document.getElementById("e-input").value;
    let res = document.getElementById("e-result");
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@+[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(str)) {
        res.style.backgroundColor = "green";
    } else {
        res.style.backgroundColor = "red";
    }
}
function checkDate() {
    let str = document.getElementById("d-input").value;
    let res = document.getElementById("d-result");
    let date = str.match(/[0-3][0-9]\/[0-9]{2}\/[1-9][0-9][0-9][0-9]/g);
    if (date) {
        res.innerHTML = date[0];
    } else {
        res.style.backgroundColor = "red";
    }
}
function checkString() {
    let str = document.getElementById("s-input").value;
    let res = document.getElementById("s-result");
    str = str.replace(/\s+/, " ");
    str = str.trim();
    let temp = str.match(/[a-zA-Z]/g);
    if (temp) {
        res.innerHTML = temp.length;
    } else {
        res.style.backgroundColor = "red";
    }
}
function checkUrl() {
    let str = document.getElementById("ur-input").value;
    let res = document.getElementById("ur-result");
    if (/^https:\/\/[a-zA-Z0-9-_]+\.+[a-zA-Z0-9-_.]+[a-zA-Z0-9]\/$/.test(str)) {
        res.style.backgroundColor = "green";
    } else {
        res.style.backgroundColor = "red";
    }
}
function checkAlphaNumeric() {
    let str = document.getElementById("a-input").value;
    let res = document.getElementById("a-result");
    if (/[a-zA-Z0-9]+$/.test(str)) {
        res.style.backgroundColor = "green";
    } else {
        res.style.backgroundColor = "red";
    }
}
function checkAlphaNumericDash() {
    let str = document.getElementById("ad-input").value;
    let res = document.getElementById("ad-result");
    if (/([a-zA-Z0-9]+[-]+[_]+)|([-]+[_]+[a-zA-Z0-9]+)|([-]+[a-zA-Z0-9]+[_]+)/.test(str)) {
        res.style.backgroundColor = "green";
    } else {
        res.style.backgroundColor = "red";
    }
}
