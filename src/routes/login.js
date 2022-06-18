const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
const Users = require('../models/users');

module.exports = function (passport) {
    router.post('/', (req, res, next) => {
        if (req.body.password) {
            Users.findOne({ login: req.body.login }).then((doc) => {
                passport.authenticate('login_web', (err, user) => {
                    console.log(err);
                    console.log(user);
                    if (err || !user) {
                        res.json({ protocol: '0.0.1', status: 1, messages: [{ type: 'error', body: 'Usuário ou senha inválidos login 15' }] });
                    } else {
                        req.logIn(user, (erro) => {
                            if (erro) {
                                res.json({ protocol: '0.0.1', status: 1, messages: [{ type: 'error', body: 'Usuário ou senha inválidos login 19' }] });
                            }
                            res.json({
                                protocol: '0.0.1', status: 1, goto: { local: '/app/admin' }, messages: [{ type: 'success', body: "Login feito com sucesso" }],
                            });
                        });
                    }
                })(req, res, next);
            });
        } else {
            res.send('Empty');
        }
        
    });
    return router;
};
