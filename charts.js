const fs = require("fs");
const express = require('express');
const path = require('path');
const server = express();


server.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+'/charts.html'));
})

server.get("/readData",(req,res)=>{
    res.send(dataSet)
})

server.listen(4000,()=>{
    console.log(`Server running on 4000.`);  
    ReadData();
});

var dataSet = null;
function ReadData(){
    try {  
        dataSet = fs.readFileSync('datatest.txt', 'utf8').replace("^\"|\"$", "").split(",");          
    } catch(e) {
        console.log('Error:', e.stack);
    }
}