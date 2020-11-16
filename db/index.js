const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('fec', 'student', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch((error) => {
  console.error('Unable to connect to the database:', error);
});
