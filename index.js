require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Connection
const connectDB = require("./connect");


const userModel = require("./user");
const jobPost = require("./jobpost");

const app = express();

app.use(express.json());
app.use(cors())

app.get("/", async (req, res) => {
    try{
        const user = await userModel.find();
        const jobs = await jobPost.find();
        return res.json({user, jobs});
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
});

app.get("/user/:_id", async (req, res) => {
    try{
        const { _id } = req.params;
    const user = await userModel.findById(_id);
    if(!user){
        return res.json({message:"No user found"});
    }

    return res.json({ user });
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
})

app.get("/user/gender/:type", async (req, res) => {
    try{
        const { type } = req.params;

    const user = await userModel.find({ userType: type });
    
    if(!user){
        return res.json({message: "No User Found"})
    }

    return res.json({ user })
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
})


app.post("/user/new", async (req, res) => {
    try{
        const { newUser } = req.body;

    await userModel.create(newUser);
    return res.json({message: "User Created"})
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
})

app.post("/job/new", async (req, res) => {
    try{
        const { newJob } = req.body;

    await jobPost.create(newJob);
    return res.json({message: "Job Created"})
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
})

app.listen(4000, () => {
    connectDB()
    .then((data)=>{
        console.log("server is running")
    })
    .catch((error) => {
        console.log(error);
    })
 })
 
