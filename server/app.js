require("dotenv").config();
const express =require("express");
const app =express();
const mongoose =require("mongoose");
const cors =require("cors");
require("./database/conn");
const task = require("./models/taskSchema");
const router=require("./routes/router");
const port = 8003;
app.use(cors())
app.use(express.json());
app.use(router);
app.listen(port,()=>{
    console.log("server is started !!");
}); 
