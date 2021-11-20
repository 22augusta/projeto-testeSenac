const series = require("../model/series.json");

const getAll = (req, res) => {
    console.log(req.url);
    
    res.send(series);
};

module.exports = {getAll};