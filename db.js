const mongoose=require("mongoose")
const db= async ()=>{
    await mongoose.connect("mongodb+srv://munna-bhai:H6H4IcSYXbsk1zZ8@first-cluster.ljcmp.mongodb.net/apple")
}
module.exports=db