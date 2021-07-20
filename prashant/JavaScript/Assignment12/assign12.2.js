class Employee {
    constructor() {
        this.empno = 0;
        this.name = "";
        this.address = "";
        this.city = "";
        this.salary = 0;
    }
    show_init() {
        return `Employee Number : ${this.empno}<br>Employee Name : ${this.name}<br>Employee Address : ${this.address}<br>Employee City : ${this.city}<br>Employee Salary : ${this.salary}<br>`;
    }
    get_data(name, addr, city, salary) {
        this.name = name;
        this.address = addr;
        this.city = city;
        this.salary = salary;
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
let emp;
let result = document.getElementById("result");
document.getElementById("one").onclick = () => {
    let emp1 = new Employee();
    emp = emp1;
};
document.getElementById("two").onclick = () => {
    let emp2 = new Employee();
    emp = emp2;
};
document.getElementById("cal").onclick = () => {
    result.innerHTML = emp.calculate();
};
document.getElementById("init").onclick = () => {
    result.innerHTML = emp.show_init();
};
document.getElementById("disp").onclick = () => {
    result.innerHTML = emp.display();
};
document.getElementById("getData").onclick = () => {
    let name = prompt("Enter a Name");
    let addr = prompt("Enter a Address");
    let city = prompt("Enter a city");
    let salary = parseInt(prompt("Enter a salary"));
    emp.get_data(name, addr, city, salary);
};