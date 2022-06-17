const Items = require('../services/items');
const AbstractController = require('./abstract/abstract');

module.exports = class ItemsController extends AbstractController {
  constructor() {
      super(Items);
  }
};
