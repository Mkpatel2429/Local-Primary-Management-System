
import React, { Component,useState } from "react";

function LoginComponent(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(email, password);
    fetch("http://localhost:3001/login-user",{
        method:"POST",
        crossDomain:true,
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
          email,
          password,
        }),
      }).then((res) => res.json()).then((data) => {
          //console.log(data);
          // const serviceProvide=window.localStorage.getItem("userType");
          if(data.status=="ok"){
            alert("Login Successfull");
            window.localStorage.setItem("token",data.data);
            window.localStorage.setItem("loggedIn",true);
            window.location.href='/Users';
            }else{
            alert("Login Failed")
            window.localStorage.setItem("loggedIn",false);
          }          
        });  
  }
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form className="mx-auto col-10 col-md-8 col-lg-6 my-5 border border-5 rounded-2" onSubmit={handleSubmit}>
          <h3>Sign In</h3>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) =>setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="btn" className="btn btn-outline-success">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            <a href="/reset" className="btn btn-outline-success me-2 my-3">Forgot Password</a>
            <a href="/sign-up" className="btn btn-outline-success">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}
export default LoginComponent;