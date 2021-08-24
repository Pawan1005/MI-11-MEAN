/* ----- Q1 Display all the fields from employee table ----- */
show databases;
use classicmodels;
show tables;
SELECT * FROM employees;
/* ----- Q2 Display employee number, first name,last name ,job title of all the employees ----- */
SELECT employeeNumber,firstName,lastName,jobTitle
FROM employees;
/* ----- Q3 Display the office code,phone number,city and country of all offices ----- */
SELECT officeCode,phone,city,country
FROM offices;
/* ----- Q4  Display all the fields from products table ----- */
SELECT * from products;
/* ----- Q5 Display the customer name,phone number,city,country of all the customers ----- */
SELECT customerName,phone,city,country
FROM customers;
/* ----- Q6 Display the details of customers where the state is null ----- */
SELECT *
FROM customers
WHERE state is NULL;
/* ----- Q7 Display the details of customers who are from country France ----- */
SELECT *
FROM customers
WHERE country = 'France';
/* ----- Q8 Display the product code,name,product description and quantity of all the products whose product line is Motocycles ----- */
SELECT productCode,productName,productDescription,quantityInStock,productLine
FROM products
WHERE productLine = 'Motorcycles';
/* ----- Q9 Display the product code,name,product description and quantity of all the products whose product line is Motocycles and quantity in stock is greater than 6000 ----- */
SELECT productCode,productName,productDescription,quantityInStock,productLine
FROM products
WHERE productLine = 'Motorcycles' AND quantityInStock > 6000;
/* ----- Q10 Display all products whose productline is cars ----- */
SELECT *
FROM products
WHERE productLine like '%Cars';
/* ----- Q11 Display all the employees who are Sales Rep ----- */
SELECT *
FROM employees
WHERE jobTitle = 'Sales Rep';
/* ----- Q12 Display all the employees with office code 4 ----- */
SELECT *
FROM employees
WHERE officeCode = 4;
/* ----- Q13 Display all the employees with office code 1,3 and 4 ----- */
SELECT *
FROM employees
WHERE officeCode IN (1,3,4);
/* ----- Q14 Display all the customers with credit limit between 70000 and 85000 ----- */
SELECT *
FROM customers
WHERE creditLimit BETWEEN 70000 AND 85000;
/* ----- Q15 Increase the credit limit by 2000 for all and display the customer code,name and credit limit ----- */
SELECT customerNumber,customerName,2000 + creditLimit  as creditLimit
FROM customers;
/* ----- Q16 Display only those records whose creditlimit after inceasing by 2000 is between 70000 and 85000 ----- */
SELECT customerNumber,customerName,2000 + creditLimit  as creditLimit
FROM customers
WHERE creditLimit BETWEEN 70000 AND 85000;

