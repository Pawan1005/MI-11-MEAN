# Display the empNumber,firstName,lastName,jobtitle,officeCode ,city,state,country of all the employees
select employeeNumber,firstName,lastName,jobtitle,e.officeCode ,city,state,country
from employees e
join offices o 
on e.officeCode = o.officeCode;
# Display the empNumber,firstName,lastName,jobtitle,officeCode ,city,state,country of all the employees whose jobTitle is Sales Rep.
select employeeNumber,firstName,lastName,jobtitle,e.officeCode ,city,state,country
from employees e
join offices o 
on e.officeCode = o.officeCode
where jobtitle = 'Sales Rep';
# Display the empNumber,firstName,lastName,jobtitle,officeCode ,city,state,country of all the employees whose office is located in USA.(country = USA)
select employeeNumber,firstName,lastName,jobtitle,e.officeCode ,city,state,country
from employees e
join offices o 
on e.officeCode = o.officeCode
where country = 'USA';
# Display the customer Number, customer Name,city,order number of all the customers.(use tables customers,orders) 	
select c.customerNumber,customerName,city,orderNumber
from customers c
join orders o	
on c.customerNumber=o.customerNumber;
# Display the customer Number, customer Name,city,order number of all the customers whose order is cancelled.(use tables customers,orders)
select c.customerNumber,customerName,city,orderNumber
from customers c
join orders o
on c.customerNumber=o.customerNumber
where status ='Cancelled';
# Display the customer Number, customer Name,city,order number of all the customers who have not placed any order.(use tables customers,orders)
select c.customerNumber,customerName,city,orderNumber
from customers c
left outer join orders o
on c.customerNumber=o.customerNumber
where orderNumber is null;
# Display the ordernumber,orderdate,status,productcode,productname,quantityOrdered
select o.orderNumber,orderDate,status,p.productCode,productName,quantityOrdered
from orders o 
join orderdetails od 
on o.orderNumber =od.orderNumber
join products p
on od.productCode = p.productCode;
# Display the ordernumber,orderdate,status,productcode,productname,quantityOrdered for all the orders whose quantityOrdered is greater than 30
select o.orderNumber,orderDate,status,p.productCode,productName,quantityOrdered
from orders o 
join orderdetails od 
on o.orderNumber =od.orderNumber
join products p
on od.productCode = p.productCode
where quantityOrdered >30;
# Display the employeeNumber,firstName,lastName, reportTo,name of the reporting person(firstName and lastName)
select e1.employeeNumber,e1.firstName,e1.lastName, e1.reportsTo , concat( e2.firstName ,' ' ,e2.lastName) as Manager
from employees e1 
join employees e2
on e1.reportsTo = e2.employeeNumber;
# Display the employeeNumber,firstName,lastName, reportTo,name of the reporting person(firstName and lastName [hint : use self join, for showing the firstName and lastName in one column use concat function]) of employees working in officeCode 1 and
select e1.employeeNumber,e1.firstName,e1.lastName, e1.reportsTo , concat( e2.firstName ,' ' ,e2.lastName) as Manager
from employees e1 
join employees e2
on e1.reportsTo = e2.employeeNumber
where e1.officeCode in (1,2);
