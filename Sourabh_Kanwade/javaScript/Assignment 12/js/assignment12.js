class Employee {
    constructor() {
        this.empno = 101;
        this.name = "Ashok Kumar";
        this.address = "43, Ramnagar";
        this.city = "Pune , Maharashtra";
        this.salary = 80000;
    }
    show_init() {
        return `Employee Number : ${this.empno}<br>Employee Name : ${this.name}<br>Employee Address : ${this.address}<br>Employee City : ${this.city}<br>Employee Salary : ${this.salary}<br>`;
    }
    calculate() {
        this.da = this.salary + this.salary * 0.3;
        this.hra = this.salary + this.salary * 0.15;
        this.pf = this.salary + this.salary * 0.125;
        this.gross = this.salary + this.da + this.hra;
        this.net = this.gross - this.pf;
        if (this.gross > 180000) {
            this.tax = "Income Tax Payer";
        } else {
            this.tax = "Not an income Tax Payer";
        }
        return this.tax;
    }
    display() {
        return `<br>Employee Number : ${this.empno}<br>Employee Name : ${this.name}<br>Gross Salary : ${this.gross}<br>Net Salary : ${this.net}`;
    }
}
let emp = new Employee();
let result = document.getElementById("result");
document.getElementById("init").onclick = () => {
    result.innerHTML += emp.show_init();
};
document.getElementById("cal").onclick = () => {
    result.innerHTML += emp.calculate();
};
document.getElementById("disp").onclick = () => {
    result.innerHTML += emp.display();
};
