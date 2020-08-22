// this js file is entry point for the backend

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const { User } = require('./models/user');

const config = require('./config/key');

mongoose.connect(config.mongoURI,
 {useNewUrlParser: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

// use body-parser and cookie-parser as middleware
app.use(bodyParser.urlencoded({extended : true })); // set extended to true to get deprecation warning
app.use(bodyParser.json()); // to use json
app.use(cookieParser());

app.post('/api/users/register', (req, res) => {
    const user = new User(req.body); // this is able due to body-parser

    user.save((err, userData) => {
        if(err) return res.json({success: false, err });
        return res.status(200).json({
            success: true,
        })
    })
})

// using http get method
app.get('/', (req, res) => {
    res.send("Hello World!");
});


// port number 5000 is standard port number for node.js
app.listen(5000, () => {
    console.log("Server is ON!")
});
