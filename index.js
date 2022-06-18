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
  secret: '123',//configure um segredo seu aqui,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 30 * 60 * 1000 }//30min
}));

app.use(passport.initialize());
app.use(passport.session());
require('./src/middlewares/auth')(passport);

app.use('/app', require('./src/routes/app')(passport));
app.use('/login', require('./src/routes/login')(passport));
//app.use('/logout', require('./src/routes/logout')());


app.listen(port, () => {
    console.log(`Running on  ${port}`)
})

