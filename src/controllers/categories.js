const Categories = require('../services/categories');
const AbstractController = require('./abstract/abstract');

module.exports = class CategoriesController extends AbstractController {
  constructor() {
      super(Categories);
  }
};
