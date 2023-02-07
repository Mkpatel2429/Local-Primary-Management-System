import React, { Component } from 'react';
import Cardservice from './Cardservice';
import Footer from './Footer';
 import Imageslider from './Imageslider';
 import Navbar from './Navbar';
 import News from './News';
import './App.css';
import './css/style.css'
import Citizenservices from './Citizenservices';


class App extends Component{
  render(){
  return (
    <div>
      <Navbar />
     
      <Imageslider/>
    <div className='container'>

        <Cardservice/>
    </div>
    <Citizenservices/>
           <News/>
      <Footer/>
    </div>
  );
}
}

export default App;
