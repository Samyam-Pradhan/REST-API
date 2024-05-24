const mongoose = require('mongoose');
const { options } = require('../routes/product');

uri ="mongodb+srv://admin:admin123@cluster0.zdpa2me.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = async() =>{
    try{
        const connect = await mongoose.connect(uri);
        console.log("Database connected:", 
        connect.connection.host,
        connect.connection.name)  // the host name and the database name connected to

    }catch (err){
        console.log(err);
        process.exit(1);  // typically indicated error condition where the process will be terminated and no further code will be executed
    }
};

module.exports = connectDb;
