import http from "http";

const server = http.createServer((req, res) => {
//   console.log(req.url);
//   res.end("<h1>Your requst has been accepted</h1>");
    if(req.url === '/wdm'){
        res.end("welcome to the web dev mastery")
    }else if(req.url === '/srk'){
        res.end("We are not able to show anythink about srk")
    }else{
        res.end("Invalied req")
    }
});

const port = 3000;
server.listen(port, () => console.log(`server is runing on port ${port}`));
