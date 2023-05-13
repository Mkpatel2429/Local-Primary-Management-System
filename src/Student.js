import React from 'react'
import Footer from './Footer'
//import { Navbar } from 'react-bootstrap'
import Navbar from './Navbar'
function Student() {
  return (
    <div>
<Navbar/>
 <div className="titlepage">
    <h2 style={{marginLeft:"38.5%",paddingTop:"2%",color:'#032154'}}><strong className="yellow"></strong><u>Student Portal</u></h2>
    <p  style={{marginLeft:"38.5%",paddingBottom:'0%'}}>All students schemes provide by the government</p>
 </div>
 <section className="ftco-section">
   <div className="container">
      <div className="row justify-content-center">
      </div>
      <div className="row">
         <div className="col-md-12">
            <div className="table-wrap">
               <table className="table">
                 <thead className="thead-primary">
                   <tr>
                     <th>#</th>
                     <th style={{fontSize:"15px"}}>Schemes</th>
                     <th  style={{fontSize:"15px"}}>Launch Date</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <th scope="row">1</th>
                     <td style={{fontSize:"15px"}}>Ayushman Sahakar Scheme</td>
                     <td  style={{fontSize:"15px"}}>October 19, 2020</td>
                   </tr>
                   <tr>
                     <th scope="row">2</th>
                     <td  style={{fontSize:"15px"}}>Pradhan Mantri Annadata Aay SanraksHan Abhiyan (PM AASHA)</td>
                    <td  style={{fontSize:"15px"}}>September 2018</td>
                   </tr>
                   <tr>
                     <th scope="row">3</th>
                     <td>Prime Minister Street Vendor’s AtmaNirbhar Nidhi (PM SVANidhi)</td>
                     <td>June 1, 2020</td>
                   </tr>
                   <tr>
                     <th scope="row">4</th>
                     <td  style={{fontSize:"15px"}}>Pradhan Mantri Vaya Vandana Yojana</td>
                     <td  style={{fontSize:"15px"}}>May 4, 2017</td>
                   </tr>
                   <tr>
                     <th scope="row">5</th>
                     <td>PM-KISAN (Pradhan Mantri Kisan Samman Nidhi) Scheme</td>
                     <td>April 5, 2019</td>
                   </tr>
                   <tr>
                     <th scope="row">6</th>
                     <td style={{fontSize:"15px"}}>Sahakar Mitra Scheme</td>
                     <td style={{fontSize:"15px"}}>June 12, 2020</td>
                   </tr>
                   <tr>
                     <th scope="row">7</th>
                     <td  style={{fontSize:"15px"}}>One Nation One Ration Card Scheme (ONORCS)</td>
                     <td  style={{fontSize:"15px"}}>October 29, 2020</td>
                   </tr>
                   <tr>
                     <th scope="row">8</th>
                     <td>SVAMITVA Scheme (Survey of Villages and Mapping with Improvised Technology in Village Areas)</td>
                     <td>April 24, 2020</td>
                   </tr>
                   <tr>
                     <th scope="row">9</th>
                     <td  style={{fontSize:"15px"}}>SATAT Scheme (Sustainable Alternative Towards Affordable Transportation)</td>
                     <td  style={{fontSize:"15px"}}>October 2018</td>
                   </tr>
                   <tr>
                     <th scope="row">10</th>
                     <td  style={{fontSize:"15px"}}>NIRVIK Scheme (Niryat Rin Vikas Yojana)</td>
                     <td  style={{fontSize:"15px"}}>February 1, 2020</td>
                   </tr>
                 </tbody>
               </table>
            </div>
         </div>
      </div>
   </div>
</section>
<Footer/>
    </div>
  )
}

export default Student