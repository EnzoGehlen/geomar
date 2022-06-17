const express = require('express');
const CategoriesClass = require('../controllers/categories');
const isAdmin = require('../helpers/isAdmin');

const Categories = new CategoriesClass();

const router = express.Router();

module.exports = () => {
  router.get('/', Categories.get.bind(Categories));
  router.get('/:id', Categories.findOne.bind(Categories));
  router.post('/', isAdmin, Categories.create.bind(Categories));
  router.put('/:id', isAdmin,Categories.update.bind(Categories));
  router.delete('/:id', isAdmin, Categories.delete.bind(Categories));
  return router;
}
