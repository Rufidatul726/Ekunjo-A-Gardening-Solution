const mongoose = require("mongoose");

const plantSchema = mongoose.Schema({
  plantName: {
    type: String,
    required: true,  // Corrected typo: "required" instead of "require"
  },
  plantInfo: {
    type: String,
    required: true,
  },
  optimalTemp: {
    type: String,
  },
  sunTime: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
