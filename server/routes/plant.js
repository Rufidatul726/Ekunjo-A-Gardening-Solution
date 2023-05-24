const express = require('express');
const router = express.Router();
const { Plant } = require('../models/plant.model');

router.get('/plants/:id', (req, res) => {
    let id = req.params.id;
    Plant.findById(id, (err, plant) => {
        if (err) return res.json({ success: false, error: err });
        else return res.json({ success: true, plant });
    });
});

router.get('/plants', async(req, res) => {
    const result = await Plant.find({});
    console.log(result);
    res.json( result );
});

module.exports = router;