import express from 'express';


const app = express();

// C = Create => POST (method)
// R = Read => GET (method)
// U = Update => PUT (method)
// D = Delete => DELETE (method)

app.get('/subrata',(req,res)=>{
    res.send("This is response!")
})

app.post('/rupom',(req,res)=>{
    
})

const port = 2000;

app.listen(port,()=>console.log(`Server is Runing on port ${port}`))