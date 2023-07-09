const mongoose =require("mongoose");
const DB="mongodb+srv://praks:praks@atlascluster.aapazwk.mongodb.net/";
mongoose.connect(DB,{
    useNewUrlParser: true,
   useUnifiedTopology: true
}).then(()=>console.log("connection start")).catch((error)=>console.log(error.message));