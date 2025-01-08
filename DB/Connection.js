//import mongoose
const mongoose=require('mongoose')

//create connection string
const connecting_string = process.env.connecting_string

//3 define connection
mongoose.connect(connecting_string).then(res=>{
    console.log("mcServer connected  with mongodb");
    
}).catch((err)=>{
    console.log("error" +err);
})