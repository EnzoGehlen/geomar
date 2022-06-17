const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');


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


app.use('/app', require('./src/routes/app')());


app.listen(port, () => {
    console.log(`Running on  ${port}`)
})

