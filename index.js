const express=require("express")
const db=require('./db.js')
const app=express()
const User=require("./user.js")

app.use(express.json())

app.post("/signup",async (req,res)=>{
    const user= new User(req.body)
    await user.save()
    
    res.send("added")
})

app.get("/feed",async(req,res)=>{
    const emailid=req.body.email
    const user=await User.find({email:emailid})
    res.send(user)
})

app.delete("/delete",async(req,res)=>{
    const id=req.body.id
    const user=await User.findByIdAndDelete(id)
    res.send("deleted")
})

app.patch("/update",async(req,res)=>{
    const id=req.body.id
    const body =req.body
    const user=await User.findByIdAndUpdate(id,body)
    res.send("updated")
})

db().then(()=>{
    console.log("connected")
    app.listen(3000,()=>{
        console.log("listening")
    })
}).catch((err)=>{
    console.error("failed")
})