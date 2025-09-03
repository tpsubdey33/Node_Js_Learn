// console.log("building server in node js")
import http from 'http';

const server = http.createServer((req,res)=>{
    res.end('You requsted for somthing')
});

const port = 1000;

server.listen(port,()=>console.log(`server is running on port ${port}`))