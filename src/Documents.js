import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import Image1 from './Images/download.png'
import './css/scheme.css'

function Documents() {
  return (
    <div>
      <Navbar/>
    <div className="titlepage">
    <h2 style={{marginLeft:"41.8%",paddingTop:"1%",color:"#032154",}}><strong className="yellow"></strong><br/><u>Documents</u></h2>
    <p  style={{marginLeft:"38.5%"}}>This is the forms to use for to get someting..</p>
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
                     <th style={{fontSize:"15px"}}>Title</th>
                     <th style={{fontSize:"15px"}}>Date</th>
                     <th style={{fontSize:"15px"}}>View/Download</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <th scope="row">1</th>
                     <td style={{fontSize:"15px"}}>Application form for financial assistance under ‘dikari roodi, sachi moodi’ yojana on the birth of a daughter BPL households of scheduled castes</td>
                     <td style={{fontSize:"15px"}}>12/09/2018</td>
                     <td style={{fontSize:"15px"}}><a href='https://cdn.s3waas.gov.in/s32dace78f80bc92e6d7493423d729448e/uploads/2018/09/2018091286.pdf'>View(49KB)</a></td>
                   </tr>
                   <tr>
                     <th scope="row">2</th>
                     <td style={{fontSize:"15px"}}>Application form for financial assistance during maternity for BPL Family</td>
                    <td style={{fontSize:"15px"}}>12/09/2018</td>
                    <td style={{fontSize:"15px"}}><a href='https://cdn.s3waas.gov.in/s32dace78f80bc92e6d7493423d729448e/uploads/2018/09/2018091299.pdf'>View(79KB)</a></td>
                   </tr>
                   <tr>
                     <th scope="row">3</th>
                     <td style={{fontSize:"15px"}}>Application for SC/ST Caste Certificate (Panchayat)</td>
                     <td style={{fontSize:"15px"}}>04/09/2018</td>
                     <td style={{fontSize:"15px"}}><a href='https://cdn.s3waas.gov.in/s32dace78f80bc92e6d7493423d729448e/uploads/2018/09/2018090450-1.pdf'>View(51KB)</a></td>
                   </tr>
                   <tr>
                     <th scope="row">4</th>
                     <td style={{fontSize:"15px"}}>Application for SEBC Certificate (Panchayat)</td>
                     <td style={{fontSize:"15px"}}>04/09/2018</td>
                     <td style={{fontSize:"15px"}}><a href='https://cdn.s3waas.gov.in/s32dace78f80bc92e6d7493423d729448e/uploads/2018/09/2018090478.pdf'>View(68KB)</a></td>
                   </tr>
                   <tr>
                     <th scope="row">5</th>
                     <td style={{fontSize:"15px"}}>Application for Income Certificate</td>
                     <td style={{fontSize:"15px"}}>04/09/2018</td>
                     <td style={{fontSize:"15px"}}><a href='https://cdn.s3waas.gov.in/s32dace78f80bc92e6d7493423d729448e/uploads/2018/09/2018090448.pdf'>View(143KB)</a></td>
                   </tr>
                   <tr>
                     <th scope="row">6</th>
                     <td style={{fontSize:"15px"}}>Application for Non-Creamy layer Certificate For Central Government</td>
                     <td style={{fontSize:"15px"}}>04/09/2018</td>
                     <td style={{fontSize:"15px"}}><a href='https://cdn.s3waas.gov.in/s32dace78f80bc92e6d7493423d729448e/uploads/2018/09/2018090469.pdf'>View(3MB)</a></td>
                   </tr>
                   <tr>
                     <th scope="row">7</th>
                     <td style={{fontSize:"15px"}}>Application for Domicile Certificate</td>
                     <td style={{fontSize:"15px"}}>04/09/2018</td>
                     <td style={{fontSize:"15px"}}><a href='https://cdn.s3waas.gov.in/s32dace78f80bc92e6d7493423d729448e/uploads/2018/09/2018090458-1.pdf'>View(88KB)</a></td>

                   </tr>
                   <tr>
                     <th scope="row">8</th>
                     <td style={{fontSize:"15px"}}>Application for Separate Ration Card – Form 5</td>
                     <td style={{fontSize:"15px"}}>04/09/2018</td>
                     <td style={{fontSize:"15px"}}><a href='https://cdn.s3waas.gov.in/s32dace78f80bc92e6d7493423d729448e/uploads/2018/09/2018090453.pdf'>View(789KB)</a></td>

                   </tr>
                   <tr>
                     <th scope="row">9</th>
                     <td style={{fontSize:"15px"}}>Application for New Ration Card – Form 2</td>
                     <td style={{fontSize:"15px"}}>04/09/2018</td>
                     <td style={{fontSize:"15px"}}><a href='https://cdn.s3waas.gov.in/s32dace78f80bc92e6d7493423d729448e/uploads/2018/09/2018090485-2.pdf'>View(815KB)</a></td>
                   </tr>
                   <tr>
                     <th scope="row">10</th>
                     <td style={{fontSize:"15px"}}>Application for Vechan / Vasayat / Bhet / Sahabhagadari Haak Dakhal / Survey Adal Badal</td>
                     <td style={{fontSize:"15px"}}>04/09/2018</td>
                     <td style={{fontSize:"15px"}}><a href='https://cdn.s3waas.gov.in/s32dace78f80bc92e6d7493423d729448e/uploads/2018/09/2018090418-1.pdf'>View(815KB)</a></td>
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

export default Documents