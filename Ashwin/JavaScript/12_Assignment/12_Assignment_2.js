class Employee {
    constructor() {
        this.empno = 0;
        this.name = "";
        this.address = "";
        this.city = "";
        this.salary = 0;
        this.da = 0;
        this.hra = 0;
        this.pf = 0;
        this.gross = 0;
        this.net = 0;
        this.basic = 0;
        this.counter = 0;
    }
    getData(empno, name, address, city, salary) {
        this.empno = empno;
        this.name = name;
        this.address = address;
        this.city = city;
        this.salary = salary;
    }
    show__init() {
        document.getElementById(
            "basicDetials"
        ).innerHTML += `<br>Employee No: <b>${this.empno}</b>`;
        document.getElementById(
            "basicDetials"
        ).innerHTML += `<br>Name: <b>${this.name}</b>`;
        document.getElementById(
            "basicDetials"
        ).innerHTML += `<br>Address: <b>${this.address}</b>`;
        document.getElementById(
            "basicDetials"
        ).innerHTML += `<br>City: <b>${this.city}</b>`;
        document.getElementById(
            "basicDetials"
        ).innerHTML += `<br>Salary: <b>${this.salary}</b><br><br>`;
        this.counter++;
    }
    calculate() {
        this.da = this.salary * 0.3;
        this.hra = this.salary * 0.15;
        this.pf = this.salary * 0.125;
        this.basic = this.salary * 12;
        this.gross = this.basic + this.da * 12 + this.hra * 12;
        this.net = this.gross - this.pf * 12;
        if (this.gross > 1_80_000) {
            alert("Income Tax Payer");
        } else {
            alert("Not an income tax payer");
        }
    }
    display() {
        this.calculate();
        document.getElementById(
            "advanceDetials"
        ).innerHTML += `<br><br>Name: <b>${this.name}</b>`;
        document.getElementById(
            "advanceDetials"
        ).innerHTML += `<br>Employee No: <b>${this.empno}</b>`;
        document.getElementById(
            "advanceDetials"
        ).innerHTML += `<br>Annual Gross Salary: <b>${this.gross}</b>`;
        document.getElementById(
            "advanceDetials"
        ).innerHTML += `<br>Net Salary: <b>${this.net}</b>`;
    }
}
var std = null;
function callGetEmployee() {
    let employeeNumber = parseInt(prompt("Enter a Employee Number:"));
    let employeeName = prompt("Enter a Employee Name:");
    let employeeAdress = prompt("Enter a Employee Address:");
    let employeeCity = prompt("Enter a Employee City:");
    let employeeSalary = parseInt(prompt("Enter a Employee Salary:"));
    std = new Employee();
    std.getData(
        employeeNumber,
        employeeName,
        employeeAdress,
        employeeCity,
        employeeSalary
    );
}
function callInitMethod() {
    std.show__init();
}
function showEmployee() {
    std.display();
}
