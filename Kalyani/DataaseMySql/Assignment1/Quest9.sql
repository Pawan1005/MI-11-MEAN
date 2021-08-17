show databases;
use classicmodels;
show tables;
select *
from employees;
select firstName,officeCode
from employees
where officeCode in (1,3,4);