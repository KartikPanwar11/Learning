import http from 'http';  // import the module
 
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hii from server');
    // console.log(req);
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);
    // console.log(req.body);
    // console.log(res);
});
server.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})


// let newMethod = http.createServer(function(req,res){    //Created a server
//     res.end('Server is running')
// }).listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`) //Bind the port with .listen
// });
