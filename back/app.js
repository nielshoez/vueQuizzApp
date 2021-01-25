const express = require('express')
const mongoose = require('mongoose')
const app = express();
const routes = require('./routes')
var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/quizzApp', { useNewUrlParser: true})
var db = mongoose.connection;

app.use('/api', routes)
 
 
app.get('/', (req, res) => {
    res.send('Hello World with Express')
});

app.listen(port, () => {
     console.log("Running quizzApp on port " + port);
});