const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
app.get("/",(req,res)=>{
    res.send("Sending message to client");
});

const start = async() =>{
    try {
        app.listen(PORT, ()=>{
            console.log(`Listinig from port ${PORT}`);
        })
    } catch (error) {
        console.log(error); 
    }
};

start();