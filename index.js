const express=require("express")
const db=require('./db.js')
const app=express()
const User=require("./user.js")

app.use(express.json())

app.post("/signup",async (req,res)=>{
    const user= new User({
        firstName:"munna",
        lastName:"bhai",
        email:"munna@gmail.com"
    })
    await user.save()
    res.send("added")
})

db().then(()=>{
    console.log("connected")
    app.listen(3000,()=>{
        console.log("listening")
    })
}).catch((err)=>{
    console.error("failed")
})