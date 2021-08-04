INSERT INTO student (stuId,studName,studAadhar,mobileNo,streams,studCourseId,address,DOB) values(1,'Amit',1234567890,9999833445,'science',null,'camp','2000-03-02');
INSERT INTO course 
values(101,'Computers'),
(102,'Electronics'),
(103,'Mechanical'),
(104,'Civil');
ALTER TABLE course
ADD courseCode varchar(4);
SELECT * FROM course;
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
INSERT INTO student 
values(2,'Piyan',76878906342,6593398334,'commerce',101,'camp','2000-05-01'),
(3,'Simaran',54665566665,9999833445,'science',102,'camp','2012-03-02'),
(4,'Aditya',5545445455,987654323,'commerce',103,'camp','2010-04-07'),
(5,'Manoj',7349302832,9999746453,'commerce',104,'camp','2011-05-07'),
(6,'Prakash',6745870283,2345678909,'science',101,'camp','2000-07-08'),
(7,'Katy',8558858547,856598456,'science',102,'camp','2011-03-23'),
(8,'Milind',3467893457,9999833445,'commerce',103,'camp','1999-04-26'),
(9,'Kritika',3425346456,9999833445,'science',104,'camp','1998-05-05'),
(10,'Pooja',3434343438,9999833445,'commerce',101,'camp','1997-06-01'),
(11,'Arvind',0987654321,9999833445,'science',101,'camp','1996-07-02');
CREATE TABLE DUP_EMP SELECT * FROM student;
DELETE FROM DUP_EMP WHERE studCourseId=103;