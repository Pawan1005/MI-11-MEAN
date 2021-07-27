function createTable() {
    let number = document.getElementById('input').value;
    let result = document.getElementById('show');
    let numberPattern = /^[0-9]*$/i;
    try {
        if(numberPattern.test(number) && (parseInt(number) >=0)) {
            let numberInt = parseInt(number);
            let upTo = 10;
            result.innerHTML = "";
            for (let num = 1; num <= upTo; num++) {
                result.innerHTML += `${numberInt} x ${num} = ${numberInt*num}<br>`;
            }
        }
        else {
            throw new Error('Please Enter a Number Only Or Positve Number');
        }
    }
    catch(error) {
        result.innerHTML = error.message;
    }
}
