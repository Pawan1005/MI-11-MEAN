show databases;
use classicmodels;
show tables;
select *
from employees;
select jobTitle,firstName,officeCode
from employees
where jobTitle = 'Sales Rep' and officeCode = 4;