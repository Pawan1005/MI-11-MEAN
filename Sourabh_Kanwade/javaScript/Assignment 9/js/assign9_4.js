let result = document.getElementById("result");
function isPalindrome(str) {
    for (let i = 0; i < parseInt(str.length / 2); i++) {
        if (str[i] == str[str.length - i - 1]) return true;
    }
    return false;
}
function checkPalindrome() {
    let str = document.getElementById("str").value;
    if (isPalindrome(str)) {
        result.classList.remove("bg-danger");
        result.classList.remove("bg-success");
        result.classList.add("bg-success");
        result.innerHTML = "yes";
    } else {
        result.classList.remove("bg-success");
        result.classList.remove("bg-danger");
        result.classList.add("bg-danger");
        result.innerHTML = "no";
    }
}
