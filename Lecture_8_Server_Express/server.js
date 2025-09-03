import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("Your Requested for Home Route! ")
})

app.get('/subrata',(req,res)=>{
    res.send("Here is some info about the Subrata!")
})

const port = 3000;
app.listen(port,()=>console.log(`server is runing on port ${port}`))