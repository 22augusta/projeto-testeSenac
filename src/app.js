const express = require('express');
const app = express();

const index = require('./routes/index');
const series = require('./require/seriesRoute');

app.use((req, res, next)=> {
    console.log('Nova requisicao realizada');

    next()
});

app.use('/', index);
app.use('/series', series);

module.exports = app;