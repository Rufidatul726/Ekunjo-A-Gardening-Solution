const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isExpert: {
        type: Boolean,
        default: false
    },
},
    { timestamp: true }
);

const User = mongoose.model("user",userSchema);
module.exports = User;