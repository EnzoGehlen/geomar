const express = require('express');
const UsersClass = require('../controllers/users');
const isAdmin = require('../helpers/isAdmin');

const Users = new UsersClass();

const router = express.Router();

module.exports = () => {
  router.get('/', Users.get.bind(Users));
  router.get('/:id', Users.findOne.bind(Users));
  router.get('/buy/:id', Users.buy.bind(Users));
  router.post('/', isAdmin, Users.create.bind(Users));
  router.put('/:id', isAdmin,Users.update.bind(Users));
  router.put('/addToCart/:id', isAdmin,Users.addCart.bind(Users));
  router.put('/removeFromCart/:id', isAdmin,Users.removeFromCart.bind(Users));
  router.put('/changeGame/:id', isAdmin,Users.removeFromCart.bind(Users));
  router.delete('/:id', isAdmin, Users.delete.bind(Users));
  return router;
}
