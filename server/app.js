const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("./models/user.model");
require("./config/db");

const app = express();

app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());

//testing home route
app.get("/", (req,res) => {
    res.send("sussy baka ekhane kisu nai")
});

//register route
app.post("/register", async (req,res) =>{
    const user = await User.findOne({phone : req.body.phone});
    if(user) res.status(400).send("user already exists");

    try {
        const hash = await new Promise((resolve, reject) => {
            bcrypt.hash(req.body.password, saltRounds, function(err,hash){
                if(err) reject(err);
                resolve(hash);
            });
        });

        const newUser = new User({
            username: req.body.username,
            phone: req.body.phone,
            password: hash
        });

        const savedUser = await newUser.save();
        res.send({
            success: true,
            message: "User successsfully created"
        });
    } catch(error) {
        res.send({message: "Couldn't create user!", error: error});
    }
});

//login route
app.post("/login", (req,res) =>{
    
})

//profile route
app.post("/login", (req,res) =>{
    
})

//resource not found
app.use((req,res,next) => {
    res.status(404).json({ message : "route not found"});
});

//server not found
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({message: "kijani hoise server e"});
});

module.exports = app;