//const express = require('express');//

const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo:'Series do ArrowVerso para assistir quando estiver de bobeira',
        data: "19/11/2021"
    })
})

module.exports = router;