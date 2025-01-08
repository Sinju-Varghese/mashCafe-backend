// 1.load .env file
require('dotenv').config()

//2. export import
const express=require('express')


//6 import cors
const cors=require('cors')
require('./DB/Connection')

//8 import router
const router = require('./Router/router')

//3 create app using express
const mcServer =express();

//7 
mcServer.use(cors())
mcServer.use(express.json())
mcServer.use(router)

// 4 create a port 
const PORT = 7000 || process.env.PORT 

//5 app
mcServer.listen((PORT),()=>{
    console.log("mcServer listening to on the port "+PORT);
})
mcServer.get('/',(req,res)=>{
    res.send("hello from server")
})