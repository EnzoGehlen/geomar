const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const Router = require('../factories/RouterFactory');

const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.user) {
      next();
  } else {
      res.redirect('/login');
  }
};
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

module.exports = () => {
  router.use('/categories', Router.get('categories'));
  router.use('/users', Router.get('users'));
  router.use('/items', Router.get('items'));

  return router;
};