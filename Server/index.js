//server/index.js
const express =require("express");
const PORT = process.env.PORT || 4433;
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'../client/build')));

app.get("/api", (req, res) =>{
    res.json({message: "Hello from server!"});
});

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../client/build', 'index.html'));
});

app.listen(PORT,() =>{
    console.log(`Server listening on ${PORT}`);
});
