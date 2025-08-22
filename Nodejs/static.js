import http from 'http'  

const PORT = 3001;
const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('Welcome to Homepage')
    } else if(req.url==='/about'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('Welcome to About')
    } else{
        res.end('404 not found')
    }
});
server.listen(3001)