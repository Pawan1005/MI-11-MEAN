show databases;
use classicmodels;
show tables;
select *
from employees;
-- Display employee number, first name,last name ,job title of all the employees
 select officeCode,extension,email
 from employees;
 -- Display all the fields from products table.
 select * from  products;
 -- Display the details of customers who are from country France.
select customerName,customerNumber,country
from customers
where country = 'france';
-- Display the product code,name,product description and quantity of all the products whose product line is Motocycles.
select productName,productCode,productDescription,quantityInStock,productLine
from products
where productLine = 'Motorcycles';
-- Display the product code,name,product description and quantity of all the products whose product line is Motocycles and quantity in stock is greater than 6000.
select productName,productCode,productDescription,quantityInStock,productLine
from products
where productLine = 'Motorcycles' or quantityInStock >= 6000;
-- Display all the employees who are Sales Rep.
select jobTitle,firstName,officeCode
from employees
where jobTitle = 'Sales Rep' and officeCode = 4;
-- Display all the employees with office code 1,3 and 4.
select firstName,officeCode
from employees
where officeCode in (1,3,4);
-- Display all the customers with credit limit between 70000 and 85000.
select customerName,creditLimit
from customers
where creditLimit between 70000 and 85000;
-- Increase the credit limit by 2000 for all and display the customer code,name and credit limit.
SELECT customerNumber,customerName,2000+creditLimit  as creditLimit
FROM customers;
-- Display only those records whose creditlimit after inceasing by 2000 is between 70000 and 85000.
SELECT customerNumber,customerName,2000+creditLimit  as creditLimit
FROM customers
WHERE creditLimit BETWEEN 70000 AND 85000;