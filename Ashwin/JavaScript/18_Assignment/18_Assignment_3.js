function discountOnShopping() {
    try {
        let amount = document.getElementById('input').value;
        let numberPattern = /^[0-9]*$/;
        if (numberPattern.test(amount)) {
            let result = document.getElementById('show');
            let amountInt = parseInt(amount);
            let discountAmount = 0;
            if (amountInt > 1000) {
                discountAmount = amountInt - (amountInt * 0.15);
                result.innerHTML = `Total Amount After Discount: ${discountAmount}`;
            }
            else if ((amountInt <= 1000) && (amountInt > 0) ) {
                discountAmount = amountInt - (amountInt * 0.05);
                result.innerHTML = `Total Amount: ${discountAmount}`;
            }
            else {
                alert("Please Enter Proper Shopping Amount");
            }
        }
        else {
            throw new Error("Please Enter Amount in Number Format Only");
        }
    }
    catch(error) {
        result.innerHTML = "";
        alert(error.message);
    }
}
