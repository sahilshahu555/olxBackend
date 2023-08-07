const express=require("express");
const cors=require("cors");



const { connection } = require("./DATABASE/db");
const { ProductRouter } = require("./route/route");

const app=express();

app.use(express.json());

app.use(cors({ origin : "*"}));


app.get("/",(req,res)=>{
    
    res.send("Hello World");
})

app.use("/product",ProductRouter)

app.listen(8080,()=>{
    connection.then(()=>console.log("Server is running on port 8080"))
    .catch((err)=>{console,log(err)})
})