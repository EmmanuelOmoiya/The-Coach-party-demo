//server/index.js
const express =require("express")
const PORT = process.env.PORT || 4433;
const app = express();

app.use(express.static(path.resolve(_dirname,'../react-tutorial/build')));

app.get("/api", (req, res) =>{
    res.json({message: "Hello from server!"});
});

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,'../react-tutorial', 'index.html'));
});

app.listen(PORT,() =>{
    console.log(`Server listening on ${PORT}`);
});
