const express = require('express');
const router = express.Router();
const Plant = require('../models/plant.model');


router.post('/getFertilizerAmount', async (req, res) => {
  const { plant, number } = req.body;

  try {
    const selectedPlant = await Plant.findOne({ name: plant });
    if (!selectedPlant) {
      return res.status(404).json({ success: false, message: 'Plant not found' });
    }

    // Calculate fertilizer amounts
    const nitrogenAmount = selectedPlant.nitrogen * number;
    const phosphorusAmount = selectedPlant.phosphorus * number;
    const potassiumAmount = selectedPlant.potassium * number;

    res.json({
      success: true,
      nitrogen: nitrogenAmount,
      phosphorus: phosphorusAmount,
      potassium: potassiumAmount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

module.exports = router;
