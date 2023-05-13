const { async } = require("@firebase/util");
const express=require("express");
const app=express();
app.use(express.json());
const mongoose=require("mongoose");
const cors=require("cors");
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const JWT_SEC="dsnjikndkjnkvnkasjvndsvjnkldjnsc"
app.set("view engine","ejs")
app.use(express.urlencoded({extended:false}))
var nodemailer=require("nodemailer");
// const Lock = require('async-lock');
// const rateLimit=require('express-rate-limit')

// const limiter = rateLimit({
// 	windowMs: 1000, // 15 minutes
// 	max: 2, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
// 	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
// 	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
// })

const mongourl="mongodb+srv://manthanpatel:manthan2412@cluster0.npwb205.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongourl,{
    useNewUrlParser:true,
}).then(()=>{
    console.log("Connected the database");
}).catch((e)=>{
    console.log(e);
})
app.listen(3001,()=>{
    console.log("Server is started");
})
require("./userDetails");
require("./complainDetails");

const complainData=mongoose.model("userComplains");
app.post("/userComplains",async(req,res)=>{
  // const{email}=req.body;
    const {fullname,address1,address2,zipcode,city,state,country,email,mobileno,file,complain}=req.body;
    // const Useremail=complainData.email;
    try{
    await complainData.create({
        fullname,address1,address2,zipcode,city,state,country,email,mobileno,file,complain,
    });
    res.send({status:"ok"});
    }catch{
    res.send({status:"error"});
    }
})

// app.post('/sendEmail',(req,res)=>{
//   const {email}=req.body;
//   var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'pmanthan206@gmail.com',
//       pass: 'zdqcxindnxitekgz'
//     }
//   });
  
//   var mailOptions = {
//     from: 'pmanthan206@gmail.com',
//     to: email,
//     subject: 'Complain Register',
//     text:'Complain Info : ' + complainData,
//   };
  
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       res.send(error);
//     } else {
//       res.send('Email sent: ' + info.response);
//     }
//   });
// })

const user1=mongoose.model("UserDetails");
app.post("/signup",async(req,res)=>{
    const {fname,lname,email,password,userType}=req.body;
    const encryPass=await bcrypt.hash(password,10);
    try{
        const olduser=await user1.findOne({email});
 
        if(olduser){
            // alert("User already exists");
            return res.send({error:"User already exists"});
        }
        await user1.create({
            fname,
            lname,
            email,
            password:encryPass,
            userType,
    });
        res.send({status:"ok"});
    }catch{
        res.send({status:"error"});
    }
})

app.post("/login-user",async(req,res)=>{
    const {email,password}=req.body;

    const loginUser =await user1.findOne({email});
    if(!loginUser){
        // alert("User not found")
        res.send({error:"User not found"});
    }
    if(bcrypt.compare(password,loginUser.password)){
        const token=jwt.sign({email:loginUser.email},JWT_SEC)
        if(res.status(201)){
            return res.json({status:"ok",data:token});
        }else{ 
            return res.json({error:"error"});
        }
    }
    //alert("password is not correct");
    res.json({status:"error",error:"Password is incorrect!"});
})

app.post("/userData",async(req,res)=>{
    const {token}=req.body;
    try {
        const user=jwt.verify(token,JWT_SEC,(err,res)=>{
          if(err){
            return "token expired";
          }
          return res;
        });
        // console.log(user)
        if(user=="token expired"){
          return res.send({status:"error",data:"token expired"});
        }
        const useremail=user.email;
         user1.findOne({email:useremail})
        .then((data) => {
            res.send({status:"ok",data:data})
        }).catch((err) => {
            res.send({status:"error",data:err})
        });
    } catch (error) {
        
    }
})

app.post("/post",async(req,res)=>{
    console.log(req.body);
    const {data}=req.body;
    try{
        if(data=="manthan"){
            res.send({status:"ok"});
        }else{
            res.send({status:"User not Found"});
        }
    }catch(error){
        res.send({status:"Something wrong please try again!!"});
    }
   
})

app.post("/forgotPassword",async(req,res)=>{
    const{email}=req.body;
    try {
        const oldUser=await user1.findOne({email});
        if(!oldUser){
            return res.json({status:"User Not Exists!!"});
        }
        const secret=JWT_SEC+oldUser.password;
        const token=k=jwt.sign({email:oldUser.email,id:oldUser._id},secret,{
            expiresIn:"5m",
        });
        const link=`http://localhost:3001/reset-password/${oldUser._id}/${token}`;
        console.log(link);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'pmanthan206@gmail.com',
              pass: 'vmkpiglgoiagdoqj'
            }
          });
          
          var mailOptions = {
            from: 'pmanthan206@gmail.com',
            to: email,
            subject: 'Reset Password',
            text:link,
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    } catch (error) {
        
    }  
})

app.get("/reset-password/:id/:token",async(req,res)=>{
    const{id,token}=req.params;
    console.log(req.params);
    const oldUser=await user1.findOne({ _id: id});
        if(!oldUser){
            return res.json({status:"User Not Exists!!"});
        }
        const secret=JWT_SEC+oldUser.password;
        try {
            const verify=jwt.verify(token,secret);
            res.render("index",{email:verify.email,status:"Not verified"})
            console.log("verified")
        } catch (error) {
            console.log("not verified");
        }
})

app.post("/reset-password/:id/:token",async(req,res)=>{
    const{id,token}=req.params;
    const {password}=req.body;
    console.log(req.params);
    const oldUser=await user1.findOne({_id:id});
        if(!oldUser){
            return res.json({status:"User Not Exists!!"});
        }
        const secret=JWT_SEC+oldUser.password;
        try {
            const verify=jwt.verify(token,secret);
            const encryPassword=await bcrypt.hash(password,10);
            await user1.updateOne({
                _id:id,
            },
            {
                $set:{
                    password:encryPassword,
                },
            }
            )
            res.render("index",{email:verify.email,status:"verified"})
            console.log("password is updated");
        } catch (error) {
            console.log("password is not updated");
        }
})

app.get("/getAllUser", async (req, res) => {
    try {
      const allUser = await user1.find({});
      res.send({ status: "ok", data: allUser });
    } catch (error) {
      console.log(error);
    }
  });

  app.get("/getAllComplain", async (req, res) => {
    try {
      const allUser = await complainData.find({});
      res.send({ status: "ok", data: allUser });
    } catch (error) {
      console.log(error);
    }
  });
  
app.post("/deleteUser", async (req, res) => {
const { id } = req.body;
try {
    user1.deleteOne({_id:id}).then(err=>{console.log(err);}) 
      res.send({ status: "Ok", data: "Deleted Successfull" });
    } catch (error) {
      console.log(error);
    }
  });

app.post("/SendData", async(req,res)=>{
  const {id}=req.body;
  try{
    complainData.findOne({_id:id}).then(err=>{console.log(err);})
    res.send({status:"Ok",data:"Send Successfully"});
  }catch(error){
    console.log(error);
  }
})
  app.post("/deleteComplain", async (req, res) => {
    const { id } = req.body;
    try {
        complainData.deleteOne({_id:id}).then(err=>{console.log(err);}) 
          res.send({ status: "Ok", data: "Deleted Successfull" });
        } catch (error) {
          console.log(error);
        }
});

app.get("/paginatedComplain", async (req, res) => {
    const allUser = await complainData.find({});
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)
  
    const startIndex = (page - 1) * limit
    const lastIndex = (page) * limit
  
    const results = {}
    results.totalUser=allUser.length;
    results.pageCount=Math.ceil(allUser.length/limit);
  
    if (lastIndex < allUser.length) {
      results.next = {
        page: page + 1,
      }
    }
    if (startIndex > 0) {
      results.prev = {
        page: page - 1,
      }
    }
    results.result = allUser.slice(startIndex, lastIndex);
    res.json(results)
  })


app.get("/paginatedUsers", async (req, res) => {
    const allUser = await user1.find({});
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)
  
    const startIndex = (page - 1) * limit
    const lastIndex = (page) * limit
  
    const results = {}
    results.totalUser=allUser.length;
    results.pageCount=Math.ceil(allUser.length/limit);
  
    if (lastIndex < allUser.length) {
      results.next = {
        page: page + 1,
      }
    }
    if (startIndex > 0) {
      results.prev = {
        page: page - 1,
      }
    }
    results.result = allUser.slice(startIndex, lastIndex);
    res.json(results)
  })