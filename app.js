const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./users')

mongoose.connect('mongodb+srv://commando26:tWrhaRIjNOwrZ8GG@cluster0.o6fcv.mongodb.net/food_delivery?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log("db connection established");
})

User.find({},function(err,user){
    if(err)
        console.warn(err);
    console.log(user);
})