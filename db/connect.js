const mongoose = require('mongoose');
const { options } = require('../routes/product');

const connectDb = async(uri) =>{
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
