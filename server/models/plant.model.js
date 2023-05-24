const mongoose = require("mongoose");

const plantSchema = mongoose.Schema({
    plantName: {
        type: String,
        require: true,
    },
    plantInfo: {
        type: String,
        require: true,
    },
    optimalTemp: {
        type: String,
    },
    sunTime: {
        type: String,
    },
    image: {
        type: String,
    }
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;