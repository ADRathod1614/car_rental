const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const app=express();

dotenv.config({path:'./config.env'});
require('./db/conn');
// const user=require('./model/schema');
app.use(express.json());
const PORT=process.env.PORT;
//middleware
app.use(require('./router/auth'));
//we have linked the router file

const middleware=(req,res,next)=>{
    console.log(`hello middleware`);
    next();
}

app.get('/',(req,res)=>{
      res.send("hello");
});

app.get('/about',middleware,(req,res)=>{
    res.send("hello about from server");
});
app.get('/contact',(req,res)=>{
    res.send("hello contact");
});
app.get('/cars',(req,res)=>{
    res.send("hello cars");
});
app.get('/blog',(req,res)=>{
    res.send("hello blog");
});
app.get('/signIn',(req,res)=>{
    res.send("hello");
});
app.get('/signUp',(req,res)=>{
    res.send("hello");
});

app.listen(8000,()=>{
    console.log('server running ');
});
