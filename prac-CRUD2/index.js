const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Item = require('./routes/item');

//make a connection to mongoose 
let url = 'mongodb://localhost/Items'
mongoose.connect(url, {useNewUrlParser: true})
    .then(()=> console.log('connected to MongoDB Servers...'))
    .catch(err => console.error("Connection Error..."))


//add our middleware (read up on this )
app.use(express.json());
// allows to use cors stuff 
//try installing cores and see if fixes without the bottom part
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use('/api/item', Item);



// listen to a port
const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Server is Running on port ${port}... `));
