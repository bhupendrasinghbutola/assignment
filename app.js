const express = require("express");
const mysql = require("mysql");
const app = express();

//create table


app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html")
})



app.listen(3000,function(){
  console.log("the server has started");
})
