import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/',(req,res)=>{
    res.send('Hello World')
});


mongoose
    .connect(
    )
    .then(()=>{
        console.log('Connected to DB')
    })
    .catch((error)=>{

    })


//post schema
const User = mongoose.model('User',userSchema);

//create operation
app.post('/register', async(req,res)=>{
    const {username,password} = req.body;

    if(!username || !password){
        return res.status(400).json({error:'Username or Password required!'})
    }
    await username.save();
    res.send('User signedup sucessfully!!')
})

// app.get('/users',async (req.res)=>{
//     const users = await User.find();
//     res.json(users)
// })

// //Server Listening
// app.listen(PORT,()=>{
//     console.log(`Server is connected to ${PORT}`);
// })