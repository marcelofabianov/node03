import Sequelize from 'sequelize';

const sequelize = new Sequelize('mysql://user:secret@localhost:3306/express');

// sequelize
//   .authenticate()
//   .then(() => console.log('Success'))
//   .catch(err => console.error(err));

const Post = sequelize.define('posts', {
  'title': {
    type: Sequelize.STRING
  },
  'body': {
    type: Sequelize.TEXT
  }
});

const User = sequelize.define('users', {
  'name': {
    type: Sequelize.STRING
  },
  'email': {
    type: Sequelize.STRING
  },
  'age': {
    type: Sequelize.INTEGER
  }
});

Post.sync();
User.sync();