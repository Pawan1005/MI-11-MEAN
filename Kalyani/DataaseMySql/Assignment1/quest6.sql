show databases;
use classicmodels;
show tables;
select *
from products;
select productName,productCode,productDescription,quantityInStock,productLine
from products
where productLine = 'Motorcycles' or quantityInStock >= 6000;


