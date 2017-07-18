const express=require('express');
const app=express();
const mongoose=require('mongoose');
const config=require('./config/database')
const path =require('path')
var port = process.env.PORT || 4000

mongoose.Promise=global.Promise;
mongoose.connect(config.uri,{ useMongoClient: true });
mongoose.connection.on('connected',() =>{
    
  console.log("Connected to Database " + config.db)
})
mongoose.connection.on('error',() =>{
  console.log(" Could not connect to db")
})
app.use(express.static(__dirname+'/client/dist/'));
app.get("*",(req,res)=>{
res.sendFile(path.join(__dirname +'/client/dist/index.html'));
});
app.listen(8000,()=>{
    console.log(" Listening on Port 8080 ");
})
