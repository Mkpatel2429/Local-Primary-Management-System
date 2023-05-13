const validator=require('validator')
const mongoose = require("mongoose");


const UserDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: {type:String,unique:true ,sparse: true,validate:{
      validator:function(email){
        return validator.isEmail(email)
      },
      message:'{VALUE} is not valid'
    }},
    password: String,
    userType: String,
  },
  {
    collection: "UserDetails",
  }
);

UserDetailsScehma.pre('validate',function(next){
  if((this.userType==='Admin' && !this.email.endsWith('gov.in')) ||(this.userType==='Service Provider' && !this.email.endsWith('service.in'))){
    const error=new Error("Email id is not valid");
    next(error);
  }else{
    next();
  }
});
mongoose.model("UserDetails", UserDetailsScehma);