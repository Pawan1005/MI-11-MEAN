function checkEvenOdd() {
    let num = document.getElementById("number").value,
        result = document.getElementById("result"),
        temp,
        sumString = "",
        productString = "",
        sum = 0,
        product = 1;
    if (num.length == 6) {
        for (let i = 0; i < num.length; i++) {
            temp = parseInt(num[i]);
            if (temp % 2 == 0) {
                sumString += `${temp}+`;
                sum += temp;
            } else {
                productString += `${temp}*`;
                product *= temp;
            }
        }
        result.innerHTML =
            sumString.slice(0, sumString.length - 1) + " = " + sum + "<br><br>" + productString.slice(0, productString.length - 1) + " = " + product;
    } else {
        result.innerHTML = "Invalid Number!!Please enter a 6 digit number.";
    }
}
