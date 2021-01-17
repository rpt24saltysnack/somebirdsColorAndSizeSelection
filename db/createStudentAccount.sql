-- generic user account used by sequelize when dealing with local mysql database
CREATE USER 'student'@'localhost';
GRANT ALL PRIVILEGES ON *.* TO 'student'@'localhost';
-- circleci student account
CREATE USER 'student'@'127.0.0.1';