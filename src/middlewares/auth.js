const LocalStrategy = require('passport-local').Strategy;
const Users = require('../models/users');

module.exports = (passport) => {
    const find = (req, login, password, done) => {
      console.log('passou no auth.js');
      Users.findOne({ login }).then((response) => {
            if (response && response.password === password) {
              req.session.user = response;
              return done(null, response);
            }
            return done(null, false, { error: 'Usuário ou senha inválidos auth.js' });
        });
    };
    // passport.serializeUser((user, cb) => cb(null, user));
    // passport.deserializeUser((user, cb) => cb(null, user));
    passport.serializeUser(function (user, cb) {
      cb(null, user.username)
    })
    
    passport.deserializeUser(function (username, cb) {
      findUser(username, cb)
    })
    passport.use(new LocalStrategy({ passReqToCallback: true }, ((req, login, password, done) => find(req, login, password, done))));
};
