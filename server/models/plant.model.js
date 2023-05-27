const mongoose = require("mongoose");

const plantSchema = mongoose.Schema({
  plantName: {
    type: String,
    required: true,
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
  N: {
    type: Number,
    required: true
  },
  P: {
    type: Number,
    required: true
  },
  K: {
    type: Number,
    required: true
  }, 
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
