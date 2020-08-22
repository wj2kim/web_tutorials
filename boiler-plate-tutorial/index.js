// this js file is entry point for the backend

const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://paul_01:123123123@cluster0.dx66t.mongodb.net/<dbname>?retryWrites=true&w=majority',
 {useNewUrlParser: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));


// using http get method
app.get('/', (req, res) => {
    res.send("Hello World!");
});


// port number 5000 is standard port number for node.js
app.listen(5000);
