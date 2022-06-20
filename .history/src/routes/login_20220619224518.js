const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
const Users = require('../models/users');

module.exports = function (passport) {
    router.post('/', (req, res, next) => {
        if (req.body.password) {
            Users.findOne({ login: req.body.login }).then((doc) => {
                passport.authenticate('local', (err, user) => {
                    if (err || !user) {
                        res.json({ protocol: '0.0.1', status: 1, messages: [{ type: 'error', body: 'Usuário ou senha inválidos' }] });
                    } else {
                        req.logIn(user, (erro) => {
                            if (erro) {
                                res.json({ protocol: '0.0.1', status: 1, messages: [{ type: 'error', body: 'Usuário ou senha inválidos' }] });
                            }
                            console.log(req.session.passport.user);
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
    


    router.get('/status', (req, res) => {
        if (req.session && req.session.passport && req.session.passport.user) {
            Users.findOne({ _id: req.session.passport.user._id }).then((doc) => {
                
            res.json(req.session.passport.user);

        } else {
            res.json(false);
        }

        
    }
    );
    return router;
};
