 class BankDet {
    constructor() {
        this.acc_no = 0;
        this.acc__name = "";
        this.bal = 0;
    }
    getData(acc_no, acc__name, bal) {
        this.acc_no = acc_no;
        this.acc__name = acc__name;
        this.bal = bal;
    }
    deposit(amountAdd) {
        this.bal += amountAdd;
    }
    withdraw(amount) {
        try {
            if (amount > this.bal) {
                throw new Error("Error: Insufficient Funds");
            }
            else {
                this.bal -= amount;
                if (this.bal < 1000) {
                    throw new Error("Warning - Balance below 1000")
                }
            }
        }
        catch (error) {
            let errorMessage = error.message.includes("Error");
            document.getElementById(errorMessage ? 'errorMessage' : 'warningMessage').innerHTML = `<b style= ${errorMessage ? "color:red" : 'color:gold'}>${error.message}</b>`;
        }
    }
}
var bankPerson = null;
var counter = 0;
function getBankData() {
    document.getElementById('warningMessage').innerHTML = "";
    document.getElementById('errorMessage').innerHTML = "";
    let accountNumber = parseInt(prompt('Enter a Account Number:'));
    let accountName = prompt('Enter a Account Holder Name:');
    let balance = parseInt(prompt('Enter a Total Balance:'));
    bankPerson = new BankDet();
    bankPerson.getData(accountNumber, accountName, balance);
    counter++;
}
function depositAmount() {
    let amountDeposit = parseInt(prompt('Enter a Amount to Be Deposit:'));
    bankPerson.deposit(amountDeposit);
}
function withdrawAmount() {
    let amountWithdraw = parseInt(prompt('Enter a Amount to Be Withdraw:'));
    bankPerson.withdraw(amountWithdraw);
}
function displayDetails() {
    let table = document.getElementById('table');
    table.style.display = "inline-block";
    let row = table.insertRow();
    let rowData1 = row.insertCell(0);
    let rowData2 = row.insertCell(1);
    let rowData3 = row.insertCell(2);
    let rowData4 = row.insertCell(3);
    rowData1.innerHTML = `${counter}`;
    rowData2.innerHTML = `${bankPerson.acc_no}`;
    rowData3.innerHTML = `${bankPerson.acc__name}`;
    rowData4.innerHTML = `${bankPerson.bal}`;
}
