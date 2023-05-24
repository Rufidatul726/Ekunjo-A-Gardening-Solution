//necessary packages
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//config files 
require("./config/db");
require("dotenv").config();

//user model
const User = require("./models/user.model");

//encryption
const saltRounds = 10;

const app = express();

app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());

//testing home route
app.get("/", (req,res) => {
    res.send("sussy baka ekhane kisu nai")
});


//plant
// const plantRouter = require('./routes/plant');
// app.use('/', plantRouter);
const Plant = require('./models/plant.model');
app.get('/plants', async(req, res) => {
    const result = await Plant.find({});
    console.log(result);
    res.json( result );
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
app.post("/login", async (req,res) =>{
    const user = await User.findOne({phone : req.body.phone});
    if(!user){
        res.status(400).send("User not found!");
    }
    if(!bcrypt.compareSync(req.body.password, user.password)){
        res.status(400).send("Incorrect password!");
    }

    const payload = {
        id: user._id,
        phone: user.phone
    }
    const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "2d"});

    return  res.status(200).send({ success : true, message : "Log in successful", token : "Bearer "+token});
})

//profile route
// app.get('/profile', passport.authenticate('jwt', { session: false }),
//     function(req, res) {
//         res.status(200).send({
//             message: "Tomar account", 
//             token: "Bearer "+token,
//             user: {
//                 id: req.user._id,
//                 phone: req.user.phone
//             }
//         }); 
//     }
// );

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