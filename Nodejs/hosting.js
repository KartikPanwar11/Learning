
import express from 'express'
import fs from 'fs'

const PORT = 3004;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.use((req,res,next)=>{
//     console.log('Middleware called');
//     next();
// })

// app.use((req,res,next)=>{
//     console.log('Middleware 2 called')
// })



app.get('/',(req,res)=>{
    res.end('Welcome to Homepage')
})

app.get('/data',(req,res)=>{
    fs.readFile('./product.json','utf-8',(err,data)=>{
        if(err){
            res.status('404')
        }else{
            res.end(data);
        }
    })
})

//server side rendering or manual hosting

app.get('/products',(req,res)=>{
    fs.readFile('document.html',(err,data)=>{
        if(err){
            res.status(404).send('Error 404 Page not found')
        }else{
            res.set('Content-Type','text/plain');
            res.end(data)
        }
    })
})

//POST route
app.post('/signup',(req,res)=>{
    res.end('Signed up')
})


app.post('/login',(req,res)=>{
    console.log(req.body);
    
})


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})