import React, { Component, useEffect, useState } from 'react'
// import {a} from 'react-router-dom'
// import { Link } from 'react-router-dom'
import logo from './Images/logo.png'
// import Loginsignup from './Loginsignup'
// import Auth from './Auth'
// import LoginComponent from './LoginComponent';
// import SigupComponent from './SignupComponent';

const Navbar=(props)=>{
  // const [show,setShow] = useState(false);
  // const onClick = (event) => {
  //   setShow(true)
  //   event.preventDefault()
  // };
  const isLoggedIn=window.localStorage.getItem("loggedIn")
  const [userData, setUserData] = useState("");
  useEffect(()=>{
    fetch("http://localhost:3001/userData",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        token: window.localStorage.getItem("token"),
      })
    }).then((res) => res.json()).then((data) => {
        // console.log(data);
        setUserData(data.data)
      });
    },[])
    const logOut=()=>{
      window.location.href="/";
      window.localStorage.clear();
    }
    // const isLoggedIn=window.localStorage.getItem("loggedIn");
    // const isLoggedOut=window.localStorage.getItem("loggedOut")
    return (
<div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light bg-light">
    <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img style={{"width":"100px"}}src={logo} alt="LPMS" srcset="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/service">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contactus">Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/aboutus">About Us</a>
        </li>
      </ul>
    {isLoggedIn=="true"? 
     <>
     
     <ul className="nav navbar-nav ms-auto ">
     <li className="nav-item dropdown">
         <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">{userData.email}</a>
         <div className="dropdown-menu dropdown-menu-end ">
             <a href="/UserProfile" className="dropdown-item">Profile</a>
             <a href="/Citizenservices/Complainform" className="dropdown-item">Complain Form</a>
             <a href="/service" className="dropdown-item">Services</a>
             <a href="/Citizenservices/Documents" className='dropdown-item'>Documents</a>
             <a href="/Citizenservices/Onlineapplication" className='dropdown-item'>Online Application</a>
             <div className="dropdown-divider"></div>
             <a href="#" className="dropdown-item" onClick={logOut}>Logout</a>
         </div>
     </li>
    </ul>
    </>
    :
      <div className='ml-auto'> 
       <a href="/sign-in" className="btn btn-outline-success me-2" role="button" >Signin</a>
       <a href="/sign-up" className="btn btn-outline-success me-2" role="button" >Signup</a> 
       </div>
      }
      </div>
  </div>
</nav>
</div>
    )
  }
export default Navbar;