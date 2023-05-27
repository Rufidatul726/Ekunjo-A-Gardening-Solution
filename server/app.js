//necessary packages
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//config files 
require("./config/db");
require("dotenv").config();

//models
const User = require("./models/user.model");
const Conversation = require("./models/conversation.model");
const Message = require("./models/message.model");

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

//plant details
const plantRouter = require('./routes/plant');
app.use('/plants', plantRouter);


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


//new login
app.post('/login', async (req, res, next) => {
    try {
        const { phone, password } = req.body;

        if (!phone || !password) {
            res.status(400).send('Please fill all required fields');
        } else {
            const user = await User.findOne({ phone });
            if (!user) {
                res.status(400).send('User phone or password is incorrect');
            } else {
                const validateUser = await bcrypt.compare(password, user.password);
                if (!validateUser) {
                    res.status(400).send('User phone or password is incorrect');
                } else {
                    const payload = {
                        userId: user._id,
                        phone: user.phone
                    }
                    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'PLACEHOLDER_SECRET_KEY';

                    jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: 84600 }, async (err, token) => {
                        await User.updateOne({ _id: user._id }, {
                            $set: { token }
                        })
                        user.save();
                        return res.status(200).json({
                            user: {
                                id: user._id,
                                phone: user.phone,
                                username: user.username
                            }, token: token
                        })
                    })
                }
            }
        }

    } catch (error) {
        console.log(error, 'Error')
    }
})

//create a convo
app.post('/conversation', async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    const newConversation = new Conversation({ members: [senderId, receiverId] });
    await newConversation.save();
    res.status(200).send('Conversation created successfully');
  } catch (error) {
    console.log(error, 'Error');
    res.status(500).json({ message: 'Internal server error' });
  }
});

//get list of convo in which current user is involved
// app.get('/conversation/:userId', async (req, res) => {
//     try {
//         const userId = req.params.userId;
//         const conversations = await Conversation.find({ members: { $in: [userId] } });
//         res.status(200).json(conversations);
//     } catch (error) {
//         console.log(error, 'Error')
//     }
// })

app.get('/conversation/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const conversations = await Conversation.find({ members: { $in: [userId] } });
        const conversationUserData = Promise.all(conversations.map(async (conversation) => {
            const receiverId = conversation.members.find((member) => member !== userId);
            const user = await User.findById(receiverId);
            return {
                user: {
                    receiverId: user._id,
                    phone: user.phone,
                    username: user.username
                }, conversationId: conversation._id
            }
        }))
        res.status(200).json(await conversationUserData);
    } catch (error) {
        console.log(error, 'Error')
    }
})

//send message
app.post('/message', async (req, res) => {
    try {
        const { conversationId, senderId, message, receiverId = '' } = req.body;
        if (!senderId || !message)
            return res.status(400).send('Please fill all required fields')
        if (conversationId === 'new' && receiverId) {
            const newCoversation = new Conversation({ members: [senderId, receiverId] });
            await newCoversation.save();
            const newMessage = new Message({ conversationId: newCoversation._id, senderId, message });
            await newMessage.save();
            return res.status(200).send('Message sent successfully');
        } else if (!conversationId && !receiverId) {
            return res.status(400).send('Please fill all required fields')
        }
        const newMessage = new Message({ conversationId, senderId, message });
        await newMessage.save();
        res.status(200).send('Message sent successfully');
    } catch (error) {
        console.log(error, 'Error')
    }
})
//get messages in a convo
app.get('/message/:conversationId', async (req, res) => {
    try {
        const checkMessages = async (conversationId) => {
            console.log(conversationId, 'conversationId')
            const messages = await Message.find({ conversationId });
            const messageUserData = Promise.all(messages.map(async (message) => {
                const user = await User.findById(message.senderId);
                return {
                    user: {
                        id: user._id,
                        phone: user.phone,
                        username: user.username
                    }, message: message.message
                }
            }));
            res.status(200).json(await messageUserData);
        }
        const conversationId = req.params.conversationId;
        if (conversationId === 'new') {
            const checkConversation = await Conversations.find({ members: { $all: [req.query.senderId, req.query.receiverId] } });
            if (checkConversation.length > 0) {
                checkMessages(checkConversation[0]._id);
            } else {
                return res.status(200).json([])
            }
        } else {
            checkMessages(conversationId);
        }
    } catch (error) {
        console.log('Error', error)
    }
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