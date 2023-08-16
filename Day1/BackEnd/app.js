const express = require("express");
const app = express();
const port = 4001
app.get("/User",(req,res)=>{
    res.send('Hello')
})
app.listen(port,()=>{
    console.log(`localhost:${port}`);
})