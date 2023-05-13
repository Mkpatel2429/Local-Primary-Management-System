import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './css/onlineapp.css'
import image1 from './Images/service_icon1.png'
import image2 from './Images/service_icon1.png'
import image3 from './Images/service_icon1.png'
function Onlineapp() {
  return (
    <div>
        <Navbar/>
         <div id="service" className="service">
         <div className="container">
            <div className="row">
               <div className="col-md-7">
                  <div className="titlepage">
                     <h2 style={{marginLeft:"58.5%",paddingTop:"1%",paddingBottom:'4%',color:"#032154"}}><strong className="yellow"></strong><u>Online Application</u></h2><br/>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4 col-sm-6">
                  <div id="ho_color" className="service_box">
                     <img src={image1} alt="#"/>
                     <a href="birth_certificate_form.html"><h3>Birth Certificate</h3></a>
                     <p>Lorem Ipsum is simply dummy text of the printing and1500s, </p>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div id="ho_color" className="service_box">
                     <img src={image2} alt="#"/>
                     <h3>Income Certificate</h3>
                     <p>Lorem Ipsum is simply dummy text of the printing and1500s, </p>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div id="ho_color" className="service_box">
                     <img src={image3} alt="#"/>
                     <h3>Non Criminal Certificate</h3>
                     <p>Lorem Ipsum is simply dummy text of the printing and1500s, </p>
                  </div>
               </div>
               {/* <!-- <div className="col-md-4 col-sm-6">
                  <div id="ho_color" className="service_box">
                     <img src="images/service_icon4.png" alt="#"/>
                     <h3>BUSINESS CONSULTING</h3>
                     <p>Lorem Ipsum is simply dummy text of the printing and1500s, </p>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div id="ho_color" className="service_box">
                     <img src="images/service_icon5.png" alt="#"/>
                     <h3>MARKETING RESEARCH</h3>
                     <p>Lorem Ipsum is simply dummy text of the printing and1500s, </p>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div id="ho_color" className="service_box">
                     <img src="images/service_icon6.png" alt="#"/>
                     <h3>UX RESEARCH</h3>
                     <p>Lorem Ipsum is simply dummy text of the printing and1500s, </p>
                  </div>
               </div> --> */}
            </div>
         </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Onlineapp