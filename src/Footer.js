import React from 'react'


function Footer() {
  return (
    <div>
        <footer className="text-center text-lg-start bg-white text-muted">

<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

  <div className="me-5 d-none d-lg-block">
  </div>
</section>

<section className="">
  <div className="container text-center text-md-start mt-5">
    <div className="row mt-3">
      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4">
          <i className="fas fa-gem me-3 text-secondary"></i>LPMS
        </h6>
        <p>
          Here you can use rows and columns to organize your footer content. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
     
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
        <h6 className="text-uppercase fw-bold mb-4">
          Citizen Services
        </h6>
        <p>
          <a href="/Citizenservices/Documents" className="text-reset">Documents</a>
        </p>
        <p>
          <a href="/Citizenservices/Onlineapplication" className="text-reset">Online Application</a>
        </p>
        <p>
          <a href="/Citizenservices/student" className="text-reset">Student Portal</a>
        </p>
        <p>
          <a href="/Citizenservices/schemes" className="text-reset">Schemes</a>
        </p>
      </div>
     
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
   
        <h6 className="text-uppercase fw-bold mb-4">
          Useful links
        </h6>
        <p>
          <a href="https://pmjdy.gov.in/" className="text-reset">PM Yojana</a>
        </p>
        <p>
          <a href="https://www.digitalgujarat.gov.in/" className="text-reset">Digital Gujarat</a>
        </p>
        <p>
          <a href="/sign-in" className="text-reset">Login |</a>
          <a href="/sign-up" className="text-reset"> SignUp</a>
        </p>
        <p>
          <a href="/contactus" className="text-reset">Help</a>
        </p>
      </div>

      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
    
        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
        <p><i className="fas fa-home me-3 text-secondary"></i> India , 384315, IN</p>
        <p>
          <i className="fas fa-envelope me-3 text-secondary"></i>
          info@example.com
        </p>
        <p><i className="fas fa-phone me-3 text-secondary"></i> +91 0123456789</p>
        <p><i className="fas fa-print me-3 text-secondary"></i> +91 9876543210</p>
      </div>
 
    </div>
 
  </div>
</section>

<div className="text-center p-4" style={{"backgroundColor":"rgba(0, 0, 0, 0.025)"}}>
  © 2023 Copyright:
  <a className="text-reset fw-bold" href="/"> Local Primary Management System</a>
</div>

</footer>
    </div>
  )
}

export default Footer