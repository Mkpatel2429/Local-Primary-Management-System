import React, { Component } from 'react'
import Cardservice from './Cardservice';
import Footer from './Footer';
 import Imageslider from './Imageslider';
 import Navbar from './Navbar';
 import News from './News';
 import Citizenservices from './Citizenservices';
 import './css/style.css';
import Auth from './Auth';

function Homepage(){

  return (
    <div>
        {/* isLoggedIn={this.state.isLoggedIn} */}
        <Navbar/>
        <Imageslider/>
        {/* <Loadingbar/> */}
     <div className='container'> 
      <Cardservice/>
      </div> 
      <Citizenservices/>
      <News/>
      <Footer/>
    </div>
  )
}
export default Homepage;