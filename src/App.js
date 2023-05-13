//import React, { Component } from 'react';
import './App.css';
import './css/style.css'
// import Auth from './Auth';
 import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import ServicePage from './ServicePage';
import ContactUs from './ContactUs';
import About from './About';
import Homepage from './Homepage';
import Student from './Student';
import Scheme from './Scheme';
import Onlineapp from './Onlineapp';
import Complainform from './Complainform';
import Documents from './Documents';
import SigupComponent from './SignupComponent';
import LoginComponent from './LoginComponent';
import Users from './Users';
// import Userprofile from './Userprofile';
import ResetProfile from './ResetProfile';
import Navbar from './Navbar';
import { useState } from 'react';
// import Admindash from './Admindash';
import adminHome from './adminHome';
import UserProfile from './UserProfile';
import ComplainData from './ComplainData';
import AdminNavbar from './AdminNavbar';
import Serviceprovider from './Serviceprovider';
// import ComplainData from './ComplainData';
// import Admindashboard from './Admindashboard';
// import AdminDashBoard from './AdminDashBoard';

  function App(){  
    
  return (
   
     <div>
       <Router>
        <Routes>
          {/* <Route
            exact
            path="/"
            element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          /> */}
          {/* <Route path="/sign-in" element={<Login />} /> */}
          <Route path="/" element={<Homepage/>} />
          <Route path="/service" element={<ServicePage/>} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/aboutus" element={<About/>} />
          <Route path="/Citizenservices/Complainform" element={<Complainform/>} />
          <Route path="/Citizenservices/Onlineapplication" element={<Onlineapp/>} />
          <Route path="/Citizenservices/Documents" element={<Documents/>} />
          <Route path="/Citizenservices/schemes" element={<Scheme/>} />
          <Route path="/Citizenservices/student" element={<Student/>} />
          <Route path="/sign-up" element={<SigupComponent/>} />
          <Route path="/sign-in" element={<LoginComponent/>} />
          <Route path='/Users' element={<Users/>}/>
          {/* <Route path="/Userprofile" element={<Userprofile/>}></Route> */}
          <Route path="/reset" element={<ResetProfile/>}></Route>
          <Route path='/adminDashboard' element={<adminHome/>}></Route>
          <Route path='/adminData' element={<AdminNavbar/>}></Route>
          <Route path='/UserProfile' element={<UserProfile/>}></Route>
          {/* <Route path="/adminDashboard" element={<Admindash/>}></Route> */}
          <Route path='/Complain' element={<ComplainData/>}></Route>
          <Route path='/ServiceProvider' element={<Serviceprovider/>}></Route>
        </Routes>
        {/* <ImageUpload/> */}
    </Router>
     </div>
  );
}


export default App;
