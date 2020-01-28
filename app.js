const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://user:secret@localhost:3306/express');

sequelize
  .authenticate()
  .then(() => console.log('Success'))
  .catch(err => console.error(err));