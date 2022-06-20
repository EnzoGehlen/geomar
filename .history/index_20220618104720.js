const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const session = require('express-session');

global.hash = '3cf724f3-0f10-4c16-aabf-4031b51a05ef';
mongoose.connect(`mongodb://localhost:27017/geomar`,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
mongoose.connection.on('connected', () => {
    console.log('Connected to Database ');
});
mongoose.connection.on('error', (err) => {
    console.log(`Database error ${err}`);
});
mongoose.Promise = global.Promise;


const app = express();
const port = 80

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
    store: global.sessionStore, secret: global.hash,
}));

app.use(passport.initialize());
app.use(passport.session());
require('./src/middlewares/auth')(passport);

app.use('/app', require('./src/routes/app')(passport));
app.use('/login', require('./src/routes/login')(passport));
app.use('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/app');
});


app.listen(port, () => {
    console.log(`Running on  ${port}`)
})

