CREATE TABLE IF NOT EXISTS course(
courseId int primary key,
courseName varchar(255) not null unique
);

CREATE TABLE IF NOT EXISTS student(
studId int primary key,
studName varchar(20) not null,
studAdhar varchar(12) unique,
mobileNo  varchar(8),
streams   varchar (10) check (streams in(commerce,science)),
studCourseId int,
FOREIGN KEY (studCourseId) REFERENCES course(courseId)
);

ALTER TABLE student
ADD Adress varchar(25),
ADD DOB date,
modify mobile varchar(10);

CREATE TABLE temp(
tempId int,
tempDesc varchar(20)
);
DROP TABLE temp;
select *
from employees
where firstName like '%f';

select *
from employees 
where firstName like '      n';

select officecode,postalCode,city,country
from offices
where country = 'USA';

select firstName,lastName
from employees
order by firstName
limit 6;

SELECT * 
FROM customers
WHERE contactFirstName LIKE 'J%' AND state IS NOT NULL;

SELECT * 
FROM customers
WHERE contactFirstName LIKE 'J%' AND state IS NOT NULL
ORDER BY creditLimit DESC;
 
SELECT * 
FROM customers
WHERE contactFirstName LIKE 'J%' AND state IS NOT NULL
ORDER BY creditLimit DESC
LIMIT 2;
