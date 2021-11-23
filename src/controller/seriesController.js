const series = require("../models/series.json");

const getAllSeries = (req, res) => {
    console.log(req.url);
    
    res.status(200).send(series);
};

module.exports = {
    getAllSeries,
    
};
