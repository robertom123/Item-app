const mongoose = require('mongoose');

//create a schema for mongoose 

const itemSchema = new mongoose.Schema({
    item : {
        type: String,
        minlength: 1
    }
});


// need create a model for it
const Item = mongoose.model('Item', itemSchema);


//export items

exports.Item = Item;