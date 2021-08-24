/* ----- Q1 Display the total number of employees in each office ----- */
SELECT count(1),officeCode
FROM employees
GROUP BY officeCode;
/* ----- Q2 Display the total number of employees in all offices ----- */
SELECT count(1)
FROM employees;
/* ----- Q3 Display the average creditLimit of all the customers ----- */
SELECT avg(creditLimit)
FROM customers;
/* ----- Q4 Display the minimum,maximum and sum of creditLimit of all the customers ----- */
SELECT min(creditLimit),max(creditLimit),sum(creditLimit)
FROM customers;
/* ----- Q5 Display total number of customers along with the country name in each country ----- */
SELECT country,count(1)
FROM customers
GROUP BY country;
/* ----- Q6 Display maximum creditLimit and minimum creditLimit in country – ‘France’ and ‘USA’ ----- */
SELECT max(creditLimit),country
FROM customers
WHERE country in ('France','USA')
GROUP BY country;
/* ----- Q7 Display countries whose minimum creditLimit is 0 ----- */
SELECT country ,credit
FROM ( SELECT min(creditLimit)as credit,country FROM customers GROUP BY country ) as test
WHERE credit = 0;
/* ----- Q8 Display the maximum creditLimit of all the customers who are from coutries – ‘USA’,’France’,’Polnd’,’Japan’ whose maximum creditLimit is greater than 0 sorted in descending order of maximum credit limit ----- */
SELECT country ,credit
FROM ( SELECT max(creditLimit)as credit,country FROM customers WHERE country in ('USA','France','Polnd','Japan') GROUP BY country ) as test
WHERE credit > 0
ORDER BY credit DESC;
/* ----- Q9 Display the order number and total orders placed in that orderNumber ----- */
SELECT  orderNumber , count(1) as 'total orders'
FROM orderdetails
GROUP BY orderNumber;
/* ----- Q10 Display the order Number, total orders placed in that orderNumer where the total orders placed in that order are greater than 15 where orderNumbers are between 10165 and 10365 ----- */
SELECT * 
FROM ( SELECT orderNumber , count(1) as total_orders FROM orderdetails GROUP BY orderNumber ) as temp
WHERE total_orders > 15 AND orderNumber BETWEEN 10165 AND 10365;

