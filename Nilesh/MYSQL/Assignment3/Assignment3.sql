/* ----- Q1 Insert record in student table but fail beacause in master table no record ----- */
INSERT INTO student ( studId,studName,studAadhar,mobileNo,streams,studCourseId,address,dob ) 
VALUES ( 1,'Amit',1234567890,9999833445,'science',101,'camp','2021-08-05' );
/* ----- Q2 Insert record in student table using studCourseId is null value is inserted ----- */
INSERT INTO student ( studId,studName,studAadhar,mobileNo,streams,studCourseId,address,dob ) 
VALUES ( 1,'Amit',1234567890,9999833445,'science',NULL,'camp','2021-08-05' );
/* ----- Q3 Insert the values in course table ----- */
INSERT INTO course 
values(101,'Computers'),(102,'Electronics'),(103,'Mechanical'),(104,'Civil');
/* ----- Q4 Add a column in course table ----- */
ALTER TABLE course
ADD courseCode varchar(4);
/* ----- Q5 Display all the records in course table ----- */
SELECT * FROM course;
/* ----- Q6 Update the courseCode as  ----- */
UPDATE course
SET courseCode ='COMP'
WHERE courseId = 101;
UPDATE course
SET courseCode ='ENTC'
WHERE courseId = 102;
UPDATE course
SET courseCode ='MECH'
WHERE courseId = 103;
UPDATE course
SET courseCode ='CIVL'
WHERE courseId = 104;
/* ----- Q7 Insert 10 records in student table ----- */
INSERT INTO student 
VALUES
(2,'Aman',98878906377,6593398334,'commerce',101,'camp','2021-07-05'),
(3,'Virat',7666567767,7666567767,'science',102,'camp','2021-7-06'),
(4,'Sachin',9475445589,9475445589,'commerce',103,'camp','2021-07-07'),
(5,'Sehwagh',8909302897,8909302897,'commerce',104,'camp','2021-07-08'),
(6,'Ramesh',8025870234,8025870234,'science',101,'camp','2021-07-09'),
(7,'Shubham',4558858345,4558858345,'science',102,'camp','2021-07-10'),
(8,'Chandu',7777893678,7777893678,'commerce',103,'camp','2021-07-11'),
(9,'Roshan',7895346567,7895346567,'science',104,'camp','2021-07-12'),
(10,'Ram',8884343488,8884343488,'commerce',101,'camp','2021-07-13'),
(11,'Suresh',9097654309,9097654309,'science',102,'camp','2021-07-14');
/* ----- Q8 Create a duplicate table of student table = DUP_EMP ----- */
CREATE TABLE DUP_EMP SELECT * FROM student;
/* ----- Q9 Delete all the records of course Mechanical course from DUP_EMP table ----- */
DELETE FROM DUP_EMP WHERE studCourseId=103;

