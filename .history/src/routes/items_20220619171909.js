const express = require('express');
const ItemsClass = require('../controllers/items');
const isAdmin = require('../helpers/isAdmin');

const Items = new ItemsClass();

const router = express.Router();

module.exports = () => {
  router.get('/', Items.get.bind(Items));
  router.get('/:id', Items.findOne.bind(Items));
  router.get('/getItemByPrice/')
  router.post('/', isAdmin, Items.create.bind(Items));
  router.put('/:id', isAdmin,Items.update.bind(Items));
  router.delete('/:id', isAdmin, Items.delete.bind(Items));
  return router;
}
