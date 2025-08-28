import http from 'http'
import fs from 'fs'
//add the product page to it using node only


const PORT = 3003;
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'Text/Plain'})
        res.end('Welcome to the Homepage')
    }
})