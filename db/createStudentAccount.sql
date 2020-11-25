CREATE USER 'student'@'localhost';

-- circleci create user command:
CREATE USER 'student'@'%';

GRANT ALL ON *.* TO 'student'@'localhost';