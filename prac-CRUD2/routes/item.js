//import express
//import Items from the model 

const express = require('express');
const {Item} = require('../models/item');
const route = express();

//create the get path 
route.get('/', async(req,res) =>{
    const items = await Item.find().sort('name');
    console.log('get path');
    console.log(items);
    res.send(items);

});

//create post path
route.post('/', async(req,res)=> {

    let items = new Item({
        item: req.body.item
    });
    console.log('post path');
    console.log(items);

    items = await items.save();
    res.send(items);
})

//create put path 
route.put('/:id', async(req,res) => {

    //update id with new item
    let items = await Item.findByIdAndUpdate(req.params.id, {
        item: req.body.item
    },
    {new: true});
    

    if(!items) return res.status(400).send('Item does not exist');

    res.send(items);
})


//create delete path 

route.delete('/:id', async(req,res) => {
    
    let items = await Item.findByIdAndDelete(req.params.id);

    if(!items) return res.status(400).send('Item does not exist');

    res.send(items);
})



//export route 
module.exports = route;