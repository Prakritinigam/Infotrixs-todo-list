const mongoose=require("mongoose");
const taskSchema=new mongoose.Schema(
    {
    
        uemail:{
            type:String,
            required:true,

        },
        tasks:{
            type:String,
        },
    }

);
const task=new mongoose.model("task",taskSchema);
module.exports=task