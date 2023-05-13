import React from 'react'
import image1 from './Images/image1.jpg'
import image4 from './Images/image4.jpg'

function Cardservice() {
  return (
    <div>
        <h2 className="Header mt-4" align="center">Services</h2>
        <div className="container">
        <div className="row">
            <div className="col-lg-6 mt-4">
                <div className="card">
                    <img className="card-img-top" src={image1} alt="Electricity Service"/>
  
                    <div className="card-body">
                        <h5 className="card-title"style={{color:"black"}}>Electicity Service</h5>
                        <p className="card-text">
                            Some quick example text to build on 
                            the card title and make up the bulk 
                            of the card's content.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mt-4">
                <div className="card">
                    <img className="card-img-top" src={image4} alt="Water Service"/>
  
                    <div className="card-body">
                        <h5 className="card-title" style={{color:"black"}}>Water Service</h5>
                        <p className="card-text">
                            Some quick example text to build on the 
                            card title and make up the bulk of the 
                            card's content.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
  )
}

export default Cardservice