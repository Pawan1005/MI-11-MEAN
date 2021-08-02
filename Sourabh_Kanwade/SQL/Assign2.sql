-- Create a table course
CREATE TABLE course (
courseId INT PRIMARY KEY,
courseName varchar(20) NOT NULL UNIQUE
); 
-- Create a table student 
CREATE TABLE student (
stuId INT PRIMARY KEY,
studName varchar(20) NOT NULL,
studAadhar varchar(12) UNIQUE,
mobileNo varchar(8),
streams varchar(10) CHECK (streams IN ('science','commerce')),
studCourseId INT,
FOREIGN KEY (studCourseId) REFERENCES course(courseId)
);
-- Alter the student table
ALTER TABLE student 
ADD address VARCHAR(30) ,
ADD DOB DATE,
MODIFY mobileNo varchar(10);
-- Create a table temp
CREATE TABLE temp (
tempId INT,
tempDesc varchar(20)
); 
-- DROP the table temp
DROP TABLE temp;
-- Display all the employees whose first name start from F.
SELECT * 
FROM employees
WHERE firstName LIKE 'F%';
-- Display all the employees whose first name has exactly 6 characters and lastname ends with n;
SELECT * 
FROM employees
WHERE firstName LIKE '_____n';
--  Display the officeCode,postalcode and city of country USA(use table offices)
SELECT officeCode,postalCode,city,country
FROM offices
WHERE country='USA';
-- Display the first 6 employees if their firstname is sorted alphabetically.
SELECT firstName,lastName
FROM employees
ORDER BY firstName
LIMIT 6; 
-- Display the customer details of the cutomers whose firstname starts with J and state is not null.
SELECT * 
FROM customers
WHERE contactFirstName LIKE 'J%' AND state IS NOT NULL;
--  Display the customer details of the cutomers whose firstname starts with J and state is not null in descending order of creditlimit.
SELECT * 
FROM customers
WHERE contactFirstName LIKE 'J%' AND state IS NOT NULL
ORDER BY creditLimit DESC;
-- Display the customer details of the first two cutomers whose firstname starts with J and state is notnull in descending order of creditlimit. 
SELECT * 
FROM customers
WHERE contactFirstName LIKE 'J%' AND state IS NOT NULL
ORDER BY creditLimit DESC
LIMIT 2;