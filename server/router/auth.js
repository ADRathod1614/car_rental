const express=require('express');
const bcrypt=require('bcryptjs');
const router=express.Router();
require('../db/conn');
const User=require('../model/schema')
router.get('/',(req,res)=>{
    res.send("hello from router");
});
// router.post('/register',(req,res)=>{
//     const {name,email,password}=req.body;
    
//     if(!name || !email || !password){
//         return res.status(404).json({error:"Pla fill all detail"})
//     }
//    User.findOne({email:email})
//      .then((userExist)=>{
//     if(userExist){
//         return res.json({error:'email already present'});
//     }
//     const user=new User({name:name,email:email,password:password});

//     user.save().then(()=>{
//         res.json({message:"success"});
//     }).catch((err)=>
//         res.json({error:"failed"}));
//     }).catch(err=>{console.log(err)})

//     res.send("register page");
// });
router.post('/contact',async(req,res)=>{
    const {firstname,lastname,email,number,text,date,time,textarea}=req.body;
    
    // if(!firstname || !lastname || !email || !number ||!text ||!date ||!time ||!textarea){
    //     return res.status(404).json({error:"Pla fill all detail"})
    // }
    // try{
    //   const userExist= await User.findOne({email:email})

    //   if(userExist){
    //     return res.status(422).json({error:'email already present'});
    // } 
    // else if(password!=cpassword){
    //     return res.status(422).json({error:"password is not matching"});
    // }

        const user=new User({firstname,lastname,email,number,text,date,time,textarea});
    
        await user.save();
    
        res.status(201).json({message:"success"});
    

    // }catch(err){
    //     console.log(err)
    // }
});
//login
router.post('/signIn',async (req,res)=>{
    try{
   const{username,password}=req.body;
      if(!username ||!password){
        return res.status(404).json({error:"fill the data"});
      }
      const UserLogin= await User.findOne({username:username});
          if(UserLogin){
            const isMatch=bcrypt.compare(password,UserLogin.password);
            if(!isMatch){
              res.status(404).json({error:"Invalid error"});  
             }
             else{
              res.json({message:"success"});
             }
          }else{
            res.status(404).json({error:"user Invalid"});   
          }

    
    }catch(err){
        console.log(err);
    }
})
module.exports=router;
