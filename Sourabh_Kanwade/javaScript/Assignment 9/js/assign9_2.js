function numberToArray(num) {
    let arr = [];
    while (num > 0) {
        let temp = num % 10;
        num = parseInt(num / 10);
        arr.unshift(temp);
    }
    return arr;
}
function isPalindrome(num) {
    let arr = numberToArray(num);
    for (let i = 0; i < parseInt(arr.length / 2); i++) {
        if (arr[i] == arr[arr.length - i - 1]) return true;
    }
    return false;
}
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
function checkPrimePalindrome() {
    let num = parseInt(document.getElementById("num").value);
    let result = document.getElementById("result");
    if (isPalindrome(num) && isPrime(num)) {
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
