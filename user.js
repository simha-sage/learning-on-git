const mongoose=require("mongoose")
const user=new mongoose.Schema(
    {
        firstName:{
            type:String
        },
        lastName:{
            type:String
        },
        email:{
            type:String
        }
    }
)
const User=mongoose.model("User",user)
module.exports= User