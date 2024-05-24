const express = require("express");
const connectDb = require("./db/connect");

const PORT = process.env.PORT || 5000;

const app = express();
app.get("/",(req,res)=>{
    res.send("Sending message to client");
});

const product_routes = require("./routes/product");
app.use("/api/products",product_routes);

const start = async() =>{
    try {
        await connectDb();
        app.listen(PORT, ()=>{
            console.log(`Listinig from port ${PORT}`);
        })
    } catch (error) {
        console.log(error); 
    }
};
start();