let arr = [];
let result = document.getElementById("result");
for (let i = 0; i < 5; i++) {
    arr[i] = parseInt(prompt("Enter a number ?"));
}
for (let j = 0; j < arr.length; j++) {
    if (isPrime(arr[j]) && isPalindrome(arr[j])) {
        result.innerHTML += `<div class="col-6 border border-dark"  style="margin-top: 20px;  height: 50px ;padding-top:10px;">${arr[j]}</div>
                            <div class="col-6 border border-dark bg-success text-white" style="margin-top: 20px;  height: 50px ;padding-top:10px;">Yes</div>`;
    } else {
        result.innerHTML += `<div class="col-6 border border-dark"  style="margin-top: 20px;   height: 50px ; padding-top:10px;">${arr[j]}</div>
                            <div class="col-6 border border-dark bg-danger text-white" style="margin-top: 20px; height: 50px ;padding-top:10px; ">No</div>`;
    }
}
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
