// console.log("building server in node js")
import http from 'http';

const server = http.createServer();

const port = 3000;

server.listen(port,()=>console.log(`server is running on port ${port}`))