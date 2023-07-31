const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const schema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    cpassword:{
        type:String,
        require:true,
    }
});


//hashing password
schema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password= await bcrypt.hash(this.password,10);
        this.cpassword=await bcrypt.hash(this.cpassword,10);
    }
    next();
})

const User=mongoose.model('user',schema);

module.exports=User;
