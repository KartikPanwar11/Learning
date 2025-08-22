import Express from 'express'
import fs from 'fs'

const PORT=3002
const app = Express();
// console.log(app);
app.get('/',(req,res)=>{
    res.send('Hello from Home')
});

app.get('/product',(req,res)=>{
    const data = fs.readFileSync("product.json",'utf-8')
        res.end(data)
    });

app.listen(PORT,()=>{
    console.log(`Running on ${PORT}`)
})