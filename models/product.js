const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "name is mandatory"],
    },
    price:{
        type: Number,
        required: [true, "price is mandatory"],
    },
    featured:{
        type: Boolean,
        default: false,
    },
    rating:{
        type: Number,
        default: 4.9,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
    Company:{
        type:String,
        enum:{
            values:["apple","samsung","dell","hp"],
            message:`{VALUE} is not supported`,
        },
    },
});

module.exports= mongoose.model("Product", productSchema);