const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const Router = require('../factories/RouterFactory');
const path = require('path');

const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.passport && req.session.passport.user) {
      next();
  } else {
      res.redirect('/app');
  }
};
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

module.exports = (passport) => {
  router.use('/categories', Router.get('categories'));
  router.use('/users', Router.get('users'));
  router.use('/items', Router.get('items'));

  router.use('/admin/dist', express.static(path.resolve(__dirname, '..', 'views', 'admin', 'src', 'dist')));
  router.use('/admin/plugins', express.static(path.resolve(__dirname, '..', 'views', 'admin', 'src', 'plugins')));
  router.use('/admin/pages', express.static(path.resolve(__dirname, '..', 'views', 'admin', 'src', 'pages')));
  router.use('/public', express.static(path.resolve(__dirname, '..', '..', 'public')));
  router.get('/admin', isAuthenticated, (req, res) => {
      res.sendFile(path.resolve(__dirname, '..', 'views', 'admin', 'src', 'iframe-dark.html'));
  });
  router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'views', 'app', 'index.html'));
  });

  router.get('/lib', isAuthenticated, (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'views', 'app', 'index.html'));
  });


  router.get('/login', (req, res) => {
      res.sendFile(path.resolve(__dirname, '..', 'views', 'app', 'login.html'));
  });
  return router;
};