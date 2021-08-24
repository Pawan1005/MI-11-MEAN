/* ----- Q1 Display the empNumber,firstName,lastName,jobtitle,officeCode ,city,state,country of all the employees ----- */
SELECT employeeNumber,firstName,lastName,jobtitle,e.officeCode ,city,state,country
FROM employees e
JOIN offices o 
ON e.officeCode = o.officeCode;
/* ----- Q2 Display the empNumber,firstName,lastName,jobtitle,officeCode ,city,state,country of all the employees whose jobTitle is Sales Rep ----- */
SELECT employeeNumber,firstName,lastName,jobtitle,e.officeCode ,city,state,country
FROM employees e
JOIN offices o 
ON e.officeCode = o.officeCode
WHERE jobtitle = 'Sales Rep';
/* ----- Q3 Display the empNumber,firstName,lastName,jobtitle,officeCode ,city,state,country of all the employees whose office is located in USA ----- */
SELECT employeeNumber,firstName,lastName,jobtitle,e.officeCode ,city,state,country
FROM employees e
JOIN offices o 
ON e.officeCode = o.officeCode
WHERE country = 'USA';
/* ----- Q4 Display the customer Number, customer Name,city,order number of all the customers ----- */	
SELECT c.customerNumber,customerName,city,orderNumber
FROM customers c
JOIN orders o	
ON c.customerNumber=o.customerNumber;
/* ----- Q5 Display the customer Number, customer Name,city,order number of all the customers whose order is cancelled ----- */
SELECT c.customerNumber,customerName,city,orderNumber
FROM customers c
JOIN orders o
ON c.customerNumber=o.customerNumber
WHERE status ='Cancelled';
/* ----- Q6 Display the customer Number, customer Name,city,order number of all the customers who have not placed any order ----- */
SELECT c.customerNumber,customerName,city,orderNumber
FROM customers c
LEFT OUTER JOIN orders o
ON c.customerNumber=o.customerNumber
WHERE orderNumber is NULL;
/* ----- Q7 Display the ordernumber,orderdate,status,productcode,productname,quantityOrdered for all order ----- */
SELECT o.orderNumber,orderDate,status,p.productCode,productName,quantityOrdered
FROM orders o 
JOIN orderdetails od 
ON o.orderNumber = od.orderNumber
JOIN products p
ON od.productCode = p.productCode;
/* ----- Q8 Display the ordernumber,orderdate,status,productcode,productname,quantityOrdered for all the orders whose quantityOrdered is greater than 30 ----- */
SELECT o.orderNumber,orderDate,status,p.productCode,productName,quantityOrdered
FROM orders o 
JOIN orderdetails od 
ON o.orderNumber =od.orderNumber
JOIN products p
ON od.productCode = p.productCode
WHERE quantityOrdered >30;
/* ----- Q9 Display the employeeNumber,firstName,lastName, reportTo,name of the reporting person ----- */
SELECT e1.employeeNumber,e1.firstName,e1.lastName, e1.reportsTo , concat( e2.firstName ,' ' ,e2.lastName) as Manager
FROM employees e1 
JOIN employees e2
ON e1.reportsTo = e2.employeeNumber;
/* ----- Q10 Display the employeeNumber,firstName,lastName, reportTo,name of the reporting person(firstName and lastName [hint : use self join, for showing the firstName and lastName in one column use concat function]) of employees working in officeCode 1 and 2 ----- */
SELECT e1.employeeNumber,e1.firstName,e1.lastName, e1.reportsTo , concat( e2.firstName ,' ' ,e2.lastName) as Manager
FROM employees e1 
JOIN employees e2
ON e1.reportsTo = e2.employeeNumber
WHERE e1.officeCode in (1,2);

