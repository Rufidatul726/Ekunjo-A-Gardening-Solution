const express = require('express');
const router = express.Router();
const Plant = require('../models/plant.model');  // Corrected import statement

router.get('/:plantName', async (req, res) => {  // Updated route path to include "/:id"
  let plantName = req.params.plantName;
  console.log(plantName);
  let sus = await Plant.find({ plantName: plantName });
  console.log(sus);
  res.json(sus);
});

router.get('/', async (req, res) => {  // Updated route path to "/"
  const result = await Plant.find({});
  //console.log(result);
  res.json(result);
});

module.exports = router;
