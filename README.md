# somebirdsColorAndSizeSelection
Shoe color &amp; size selection service

## Repo Setup
### Run npm install
```
npm install
```

### MySQL Database Setup
```
npm run db:seed
```
This will create a database called fec_somebirds_shoeinventory.

*in order to seed the database, there must be a 'student' account with create, insert, and drop permissions.
To create this login acount with all the available permissions (for simplicity), log in to MySQL on an administrative account and run the following commands:
```
CREATE USER 'student'@'localhost';
GRANT ALL ON *.* TO 'student'@'localhost';
```