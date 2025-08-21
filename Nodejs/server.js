import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.end('Hii from server');
    // console.log(req);
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);
    // console.log(req.body);
    console.log(res);
});

server.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})
