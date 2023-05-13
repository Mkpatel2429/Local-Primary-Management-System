// import React, {useState,useEffect,Component} from 'react'
import Navbar from './Navbar';

import Imageslider from './Imageslider';
import News from './News';
import ContactUs from './ContactUs';
import Citizenservices from './Citizenservices';

function userHome({userData}) {
   
  return (
    <div>
      <Navbar/>
<Imageslider/>
<Citizenservices/>
<News/>
<ContactUs/>
    </div>
  )
}

export default userHome