const LocalStrategy = require('passport-local').Strategy;
const Users = require('../models/users');

module.exports = (passport) => {
    const find = (req, login, password, done) => {
      Users.findOne({ login }).populate(['cart', 'library']).then((response) => {
            if (response && response.password === password) {
              req.session.user = response;
              return done(null, response);
            }
            return done(null, false);
        })
    };

    passport.serializeUser((user, cb) => cb(null, user));
    passport.deserializeUser((user, cb) => cb(null, user));
    passport.use(new LocalStrategy({
       passReqToCallback: true,  
       usernameField: 'login',
       passwordField: 'password'
      }, 
      ((req, username, password, done) => find(req, username, password, done))));

};
