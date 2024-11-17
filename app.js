const express = require('express')
const connectToDB = require('./config/database')

const User = require('./src/user')

const app = express()


app.post("/signup",async (req,res)=>{

    const userobj = {
        firstName: "Vishwas",
        lastName: "K",
        email: "vk01@gmail.com",
        gender: "M",
        age: 28
    }
    const user = new User(userobj);
    try{
        await user.save();
        res.send("User added successfully")
    } catch(err) {
        res.status(400).send("Error while saving details")
    }
    

})

connectToDB().then(()=>{
    console.log("Connected to Database successfully");
    app.listen(8080,()=>console.log("Connected to port 8080"))
})
.catch((err)=>console.log(err));