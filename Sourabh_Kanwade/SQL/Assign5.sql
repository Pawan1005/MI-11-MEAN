# Display the total number of employees in each office.
select count(1),officeCode
from employees
group by officeCode;
# Display the total number of employees in all offices
 select count(1)
from employees;
# Display the average creditLimit of all the customers
select avg(creditLimit)
from customers;
# Display the minimum,maximum and sum of creditLimit of all the customers. 
select min(creditLimit),max(creditLimit),sum(creditLimit)
from customers;
# Display total number of customers along with the country name in each country.
 select country,count(1)
 from customers
 group by country;
# Display maximum creditLimit and minimum creditLimit in country – ‘France’ and ‘USA’
select max(creditLimit),country
from customers
where country in ('France','USA')
group by country;
# Display countries whose minimum creditLimit is 0. 
select country ,credit
from(select min(creditLimit)as credit,country
	from customers
	group by country) as test
where credit = 0;
# Display the maximum creditLimit of all the customers who are from coutries – ‘USA’,’France’,’Polnd’,’Japan’ whose maximum creditLimit is greater than 0 
# sorted in descending order of maximum credit limit. 
select country ,credit
from
	(select max(creditLimit)as credit,country
	from customers
    where country in ('USA','France','Polnd','Japan')
	group by country) as test
    where credit > 0
    order by credit desc;
# Display the order number and total orders placed in that orderNumber .
select  orderNumber , count(1) as 'total orders'
from orderdetails
group by orderNumber;
# Display the order Number, total orders placed in that orderNumer
# where the total orders placed in that order are greater than 15
# where orderNumbers are between 10165 and 10365 
select * 
from (select  orderNumber , count(1) as total_orders
from orderdetails
group by orderNumber) as temp
where total_orders > 15 AND orderNumber between 10165 and 10365;