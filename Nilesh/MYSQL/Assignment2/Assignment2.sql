/* ----- Q1 Create table course ----- */
use classicmodels;
show tables;
CREATE TABLE course (
	courseId INT,
    courseName VARCHAR(20) NOT NULL,
    PRIMARY KEY (courseId),
    UNIQUE (courseName)
);
/* ----- Q2 Create table student ----- */
show tables;
CREATE TABLE student (
	studId INT,
    studName VARCHAR(20) NOT NULL,
    studAadhar VARCHAR(12) UNIQUE,
    mobileNo VARCHAR(8),
    streams VARCHAR(10) CHECK (streams IN('science','commerce')),
    studCourseId INT,
    PRIMARY KEY (studId),
    FOREIGN KEY (studCourseId) REFERENCES course (courseId)
);
/* ----- Q3 Alter the student table ----- */
show tables;
ALTER TABLE student
ADD address VARCHAR(30),
ADD dob Date,
MODIFY mobileNo VARCHAR(10);
/* ----- Q4 Create a table temp ----- */
CREATE TABLE temp (
	tempid INT,
    tempDesc VARCHAR(20)
);
/* ----- Q5 DROP the table temp ----- */
DROP TABLE temp;
/* ----- Q6 Display all the employees whose first name start from F ----- */
SELECT firstName
FROM employees
WHERE firstName like 'F%';
/* ----- Q7 Display all the employees whose first name has exactly 6 characters and lastname ends with n ----- */
SELECT firstName,lastName
FROM employees
WHERE firstName like '______' AND lastName like '%N';
/* ----- Q8 Display the officeCode,postalcode and city of country USA ----- */
SELECT officeCode,postalCode,city,country
FROM offices
WHERE country = 'USA';
/* ----- Q9 Display the first 6 employees if their firstname is sorted alphabetically ----- */
SELECT *
FROM employees
ORDER BY firstName
LIMIT 6;
/* ----- Q10 Display the customer details of the cutomers whose firstname starts with J and state is not null ----- */
SELECT *
FROM customers
WHERE contactFirstName like 'J%' AND state is NOT NULL;
/* ----- Q11 Display the customer details of the cutomers whose firstname starts with J and state is not null in descending order of creditlimit ----- */
SELECT *
FROM customers
WHERE contactFirstName like 'J%' AND state is NOT NULL
ORDER BY creditLimit DESC;
/* ----- Q12 Display the customer details of the first two cutomers whose firstname starts with J and state is notnull in descending order of creditlimit ----- */
SELECT *
FROM customers
WHERE contactFirstName like 'J%' AND state is NOT NULL
ORDER BY creditLimit DESC
LIMIT 2;

