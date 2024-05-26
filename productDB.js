const dotenv = require('dotenv').config();
const Product = require('./models/product');
const connectDb = require('./db/connect');
const process = require('process');

const Productjson = require('./product.json');

const start = async()=>{
    try {
        await connectDb(process.env.MONGODB_URL)
        await Product.create(Productjson);
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
};
start();