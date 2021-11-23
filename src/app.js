const express = require('express');
const app = express();

app.use(express.json())

const index = require('./routes/index');
const series = require('./routes/seriesRoutes');

app.use(function(req, res, next) {
    res.header('Accss-Control-Allow-Origin','*')
    res.header(
        'Access-Control-Allow-Origin',
        'Origin,X-Requested-With,Conent-Type,Accept'
   
    )
    next()
});

app.use('/', index);
app.use('/series', series);

module.exports = app;
