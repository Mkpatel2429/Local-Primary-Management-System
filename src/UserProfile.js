import React from 'react'
import './css/userProfile.css'
import Navbar from './Navbar';
import Footer from './Footer';
import { useState , useEffect} from 'react';

function UserProfile() {
    const [userData, setUserData] = useState("");
//   const [admin, setAdmin] = useState(false);

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
        //   if (data.data.userType == "Admin") {
        //     window.localStorage.setItem('Admin',true);
        //     setAdmin(true);
        //   }
            setUserData(data.data);
            // if (data.data == "token expired") {
            //   alert("Token expired login again");
            //   window.localStorage.clear();
            //   window.location.href = "./sign-in";
        })
    })  
  return (
    <div>
<Navbar/>
<div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                        {userData.fname}
                                    </h5>
                                    <h6>
                                        {userData.email}
                                    </h6>
                                    <p className="proile-rating">RANKINGS : <span>8/10</span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>WORK LINK</p>
                            <a href="">Website Link</a><br/>
                            <a href="">Bootsnipp Profile</a><br/>
                            <a href="">Bootply Profile</a>
                            <p>SKILLS</p>
                            <a href="">Web Designer</a><br/>
                            <a href="">Web Developer</a><br/>
                            <a href="">WordPress</a><br/>
                            <a href="">WooCommerce</a><br/>
                            <a href="">PHP, .Net</a><br/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Id</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userData._id}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>First Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userData.fname}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Last Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userData.lname}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userData.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>           
                </div>
            <Footer/>
        </div>
  )
}

export default UserProfile