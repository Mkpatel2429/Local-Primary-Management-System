import React, { Component } from 'react'
import image1 from './Images/form.png'
import image2 from './Images/list.png'
import image3 from './Images/document.png'
import image4 from './Images/bullhorn.png'
import image5 from './Images/reading.png'
import image6 from './Images/planning.png'


class Citizenservices extends Component {
render(){
  return (
    <div>
        <div id="service" className="service">
      <div className="container">
         <div className="row">
            <div className="col-md-7">
               <div className="titlepage mr-5">
                  <h2><strong className="yellow"></strong><br/>Citizen Service</h2>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-md-4 col-sm-6">
               <div id="ho_color" className="service_box">
                  <img className='w-25 p-3'src={image1} alt="#"/>
                  <a href="form.html"><h3>Forms</h3></a>
                  <p>Forms are available to connect with the organisations easily
                  </p>
               </div>
            </div>
            <div className="col-md-4 col-sm-6">
               <div id="ho_color" className="service_box">
                  <img className='w-25 p-3' src={image2} alt="#" />
                  <a href="service.html"><h3>Online Application</h3></a>
                  <p>E-Forms are available to connect with the organisations easily
                  </p>
               </div>
            </div>
            <div className="col-md-4 col-sm-6">
               <div id="ho_color" className="service_box">
                  <img className='w-25 p-3' src={image3} alt="#" />
                  <a href="document.html"><h3>Documents</h3></a>
                  <p>Anything and everything possible on your system through this website</p>
               </div>
            </div>
            <div className="col-md-4 col-sm-6">
               <div id="ho_color" className="service_box">
                  <img className='w-25 p-3' src={image4} alt="#" />
                  <a href="https://www.digitalgujarat.gov.in/"><h3>Digital Gujarat</h3></a>
                  
                  <p>More infomation need in this website</p>
               </div>
            </div>
            <div className="col-md-4 col-sm-6">
               <div id="ho_color" className="service_box">
                  <img className='w-25 p-3' src={image6} alt="#" />
                  <a href="scheme.html"><h3>Schemes</h3></a>
                  <p>All the schemes provided by the government will be displayed in this section</p>
               </div>
            </div>
            <div className="col-md-4 col-sm-6">
               <div id="ho_color" className="service_box">
                  <img className='w-25 p-3' src={image5} alt="#" />
                  <a href={image5}><h3>Student Corner</h3></a>
                  <p>All the student certificates provided by the government will be displayed in this section </p>
               </div>
            </div>
            {/* <!-- <div className="col-md-12">
               <a className="read_more" href="#">Read More</a>
            </div>  */}
         </div>
      </div>
   </div>
   </div>
  )
}
}
export default Citizenservices