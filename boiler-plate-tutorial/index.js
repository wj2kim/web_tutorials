// this js file is entry point for the backend

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const { User } = require('./models/User');
const { auth } = require('./middleware/auth');

const config = require('./config/key');

const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)

mongoose.connect(config.mongoURI,
 {useNewUrlParser: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));


// use body-parser and cookie-parser as middleware
app.use(bodyParser.urlencoded({extended : true })); // set extended to true to get deprecation warning
app.use(bodyParser.json()); // to use json
app.use(cookieParser());


app.get("/api/user/auth", auth, (req, res) => {
    res.status(200).json({
        _id : req._id,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role
    })
})

app.post('/api/users/register', (req, res) => {
    const user = new User(req.body); // this is able due to body-parser

    user.save((err, doc) => {
        if(err) return res.json({success: false, err });
        res.status(200).json({
            success: true,
            userData: doc
        })
    })
});

app.post('/api/user/login', (req, res) => {
    // find email
    User.findOne({ email: req.body.email }, (err, user) => {
        if(!user){
            return res.json({
                loginSuccess : false,
                message: "Auth failed, email not found"
            });
        }
            // compare password
    user.comparePassword(req.body.password, (err, isMatch) => {
        if(!isMatch) {
            return res.json({ 
                loginSuccess : false, 
                message:"wrong password"
            })
        }
        //generate Token
        user.generateToken((err, user) => {
            if(err) return res.status(400).send(err);
            res.cookie("x_auth", user.token)
                .status(200)
                .json({
                    loginSuccess: true
                })
            })
        })
    })
})


app.get("/api/user/logout", auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id}, { token: ""}, (err, doc) => {
        if(err) return res.json({ success: false, err })
        return res.status(200).send({success: true})
    })
})


// port number 5000 is standard port number for node.js
app.listen(5000, () => {
    console.log("Server is ON!")
});
