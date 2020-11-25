CREATE USER 'student'@'localhost';
-- circleCI requirement
CREATE USER 'student'@'127.0.0.1';
GRANT ALL ON *.* TO 'student'@'localhost';