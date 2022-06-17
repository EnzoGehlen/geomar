const Users = require('../services/users');
const AbstractController = require('./abstract/abstract');

module.exports = class UsersController extends AbstractController {
  constructor() {
      super(Users);
  }
};
