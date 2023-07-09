const express = require("express");
const router = express.Router();
const task = require("../models/taskSchema")
const user = require("../models/userSchema")

//Insert Data For Unregisterd User
router.post("/taskadd", async (req, res) => {
    console.log(req.body);
    const { uemail,tasks } = req.body;
    const addtask = new task({
        uemail,tasks
    });
    await addtask.save();
    res.status(201).json(addtask);
    console.log(addtask);
})
router.post("/useradd", async (req, res) => {
    console.log(req.body);
    const { name,email,pass } = req.body;
    const addtask = new user({
        name,email,pass
    });
    await addtask.save();
    res.status(201).json(addtask);
    console.log(addtask);
})

router.post("/userlogin", async (req, res) => {
    console.log(req.body);
    try {
    const { email,pass} = req.body;
        const users=await user.findOne({ email: email });
        console.log(users)
        if (users) {
        if(users.pass === pass){
            res.status(201).json("Logged In")
        }
        else {
            res.status(401).json("Password Invalid")
            alert("Password Invalid")
        }
    }
    else{
        res.status(406).json("User not found")
    }
}
    catch (error) { res.status(404).json(error) }
});
//Get all data without any condition
router.get("/gettask", async (req, res) => {
    try {
        const userdata = await task.find();
        console.log(userdata);
        res.status(201).json(userdata);
    }
    catch (error) {
        res.status(404).json(error);

    }
})


//Get User Detail By Id 
router.get("/gettask/:id", async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const indivisualtask = await task.findOne({ _id: id });
        console.log(indivisualtask);
        res.status(201).json(indivisualtask);
    }
    catch (error) {
        console.log(error);
        res.status(422).json(error);
    }
})
//Get user Detail By Id And Email
router.get("/getuser/:id/:email", async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const { email } = req.params;
        const indivisualuser = await users.findOne({ _id: id }, { email: email });
        console.log(indivisualuser);
        res.status(201).json(indivisualuser);

    }
    catch (error) {
        console.log(error);
        res.status(422).json(error);
    }
})

//updateuser
router.patch("/updatetask/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedata = await task.findByIdAndUpdate(id, req.body, {
            new: true   
        });      
        res.status(201).json(updatedata);
        // console.log(updatedata);
        console.log("Updated")
    }
    catch (error) {
        res.status(422).json(error);
        console.log("error")

    }
})
///
//delete
router.delete("/deletetask/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletetasks = await task.findByIdAndDelete({ _id: id })
        res.status(201).json(deletetasks);
    }
    catch (error) {
        console.log(error);
    }

})
module.exports = router;