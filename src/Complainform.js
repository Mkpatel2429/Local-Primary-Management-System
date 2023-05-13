import Navbar from './Navbar'
import Footer from './Footer'
import React, { Component } from "react"
import app from './firebase';
import { getAuth, RecaptchaVerifier ,signInWithPhoneNumber } from "firebase/auth";

const auth = getAuth(app);
export default class Complainform extends Component {
  constructor(props){
    super(props);
    this.state={
      fullname:" ",
      address1:" ",
      address2:" ",
      zipcode:" ",
      city:" ",
      state:" ",
      country:" ",
      email:"",
      mobileno:" ",
      verifyButton:false,
      VerifyOTP:false,
      otp:"",
      file:" ",
      complain:" ",
      verified:false,
    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.signMobile=this.signMobile.bind(this);
    this.verifyCode=this.verifyCode.bind(this);
  }
  
  verifyMobile(){
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
  'size': 'invisible',
  'callback': (response) => {
    this.signMobile();
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    // ...
    },
  }, 
    auth);
}
signMobile=()=>{
  this.verifyMobile()
  const phoneNo="+91"+this.state.mobileno;
  const appVerifier = window.recaptchaVerifier;
  signInWithPhoneNumber(auth, phoneNo, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      alert("OTP is Sended");
      this.setState({VerifyOTP:true});
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    });
  }

verifyCode(){
  window.confirmationResult.confirm(this.state.otp).then((result) => {
    // User signed in successfully.
    const user = result.user;
    console.log(user);
    alert("Verification Successfull");
    this.setState({
      verified:true,
      VerifyOTP:false,
    })
  }).catch(() => {
    // User couldn't sign in (bad verification code?)
    alert("OTP Invalid");
  });
  
}
changeMobil=(e)=>{
  this.setState({mobileno:e.target.value},function(){
    if(this.state.mobileno.length==10){
      this.setState({
        verifyButton:true,
      })
    }
  });
}

  handleSubmit = (e) =>{
    e.preventDefault();  
    if(this.state.verified){
      const {fullname,address1,address2,zipcode,city,state,country,email,mobileno,file,complain,}=this.state;
      console.log(fullname,address1,address2,zipcode,city,state,email,country,mobileno,file,complain);
      fetch("http://localhost:3001/userComplains",{
        method:"POST",
        crossDomain:true,
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
          fullname,address1,address2,zipcode,city,state,country,email,mobileno,file,complain,
        }),
      }).then((res) => res.json()).then((data) => {
          // console.log(data);
          if(data.status=="ok"){
            alert("Complain Register Successfully");
            window.localStorage.setItem("id",data.data.id)
            console.log(data.data._id);
          }else{
            alert("Comlpain not Registered");
          }
        });
    }else{
      alert("Please Verify Your MobileNo!");
    }
  }
onSubmit=(e)=>{
  e.preventDefault();
}
  render(){
  return (
    <div>
   <Navbar/>
    <h2 style={{marginLeft:"40.5%",paddingTop:"1%",color:"#032154",}}><strong className="yellow"></strong><br/><u>Complain Form</u></h2>
    <div className="row">
    <form  className='mx-auto col-10 col-md-8 col-lg-6 my-5 border border-5 rounded-2' onSubmit={this.handleSubmit}>
  <div className="form-group">
    <label for="Name1">Your FullName</label>
    <input type="name" className="form-control" id="name1" placeholder="Enter your fullname" onChange={(e) => this.setState({fullname:e.target.value})} required/>
  </div>
  <div className="form-group">
    <label for="Address1">Address 1</label>
    <input type="text" className="form-control" id="address1" placeholder="Enter your address" onChange={(e) => this.setState({address1:e.target.value})} required/>
  </div>
<div className="form-group">
    <label for="Address2">Address 2</label>
    <input type="text" className="form-control" id="address2" placeholder="Enter your address" onChange={(e) => this.setState({address2:e.target.value})} required/>
  </div>
<div className="form-group">
    <label for="zipcode">Zip Code</label>
    <input type="text" className="form-control" id="zcode" placeholder="Enter your Zipcode" onChange={(e) => this.setState({zipcode:e.target.value})} required/>
  </div>
<div className="form-group">
    <label for="City">City</label>
    <input type="text" className="form-control" id="city" placeholder="Enter your city" onChange={(e) => this.setState({city:e.target.value})} required/>
  </div>
<div className="form-group">
    <label for="state">State</label>
    <input type="text" className="form-control" id="state" placeholder="Enter your state" onChange={(e) => this.setState({state:e.target.value})} required/>
  </div>
<div className="form-group">
    <label for="country">Country</label>
    <input type="text" className="form-control" id="country" placeholder="Enter your country" onChange={(e) => this.setState({country:e.target.value})} required/>
  </div>
  <div className="form-group">
    <label for="email">Email</label>
    <input type="email" className="form-control" id="country" placeholder="Enter your email" onChange={(e) => this.setState({email:e.target.value})} required/>
  </div>
  <div id='recaptcha-container'></div>
<div className="form-group">
    <label for="Mobileno">Mobile No</label>
    <input type="text" id="mobileno" className="form-control" placeholder="Enter your Mobile No" onChange={(e)=>this.changeMobil(e)} required/>  
    {this.state.verifyButton?<input type="button" className='btn btn-primary my-2' value={this.state.verified?"Verified":"Verify"} onClick={this.signMobile}/>:null} 
  </div>
  {/* pattern="[0-9]{10}" title='Please enter the valid mobile number' */}
{this.state.VerifyOTP?<div className="form-group">
    <label for="OTP">OTP</label>
    <input type="text" className="form-control" placeholder="Enter your OTP" onChange={(e) => this.setState({otp:e.target.value})} required/>
    <input type="button" className='btn btn-primary my-2' value="Verify" onClick={this.verifyCode} />
  </div>:null}
<div className="form-group">
    <label for="exampleInputFile">File input</label>
    <input type="file" id="exampleInputFile" accept=".jpeg,.jpg" onChange={(e) => this.setState({file:e.target.value})} required/>
    <p className="help-block">Only JPEG & JPG Format is valid</p>
  </div>
 <div className="form-group">
    <label for="complain"></label>
          <textarea
          id="message"
            name="message"
            className="form-control"
            rows="3"
            placeholder="Complain Write Here........" 
            onChange={(e) => this.setState({complain:e.target.value})} required></textarea>
  </div>
  <button type="submit" className="btn btn-outline-success my-2 px-4">Submit</button>
</form>
</div>
<Footer/>
    </div>
  )
}
}
