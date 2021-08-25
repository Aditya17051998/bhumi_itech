const express=require('express');
const app=express();
const cors=require('cors');
const PORT = process.env.PORT || 3000;



app.use(cors());


// app.use(express.urlencoded());
app.use(express.json());

app.get('/about',(req,res)=>{
    console.log("home");
    res.send("hello world");
});


app.listen(PORT,()=>{
    console.log("server is running on",PORT);
})