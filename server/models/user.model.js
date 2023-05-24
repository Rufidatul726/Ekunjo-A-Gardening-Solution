const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
},
    { timestamp: true }
);

const User = mongoose.model("user",userSchema);
module.exports = User;