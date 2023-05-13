import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import ServicePage from './ServicePage';
import ContactUs from './ContactUs';
import About from './About';
import Homepage from './Homepage';
import Student from './Student';
import Scheme from './Scheme';
import Onlineapp from './Onlineapp';
import Complainform from './Complainform';
import Documents from './Documents';
import SigupComponent from './SignupComponent';
import LoginComponent from './LoginComponent';
import Users from './Users';
import Userprofile from './Userprofile';
import ResetProfile from './ResetProfile';

const Routing=()=>{
    <div>
           <Router>
            <Routes>
              {/* <Route
                exact
                path="/"
                element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
              /> */}
              {/* <Route path="/sign-in" element={<Login />} /> */}
              <Route path="/" element={<Homepage/>} />
              <Route path="/service" element={<ServicePage/>} />
              <Route path="/contactus" element={<ContactUs/>} />
              <Route path="/aboutus" element={<About/>} />
              <Route path="/Citizenservices/Complainform" element={<Complainform/>} />
              <Route path="/Citizenservices/Onlineapplication" element={<Onlineapp/>} />
              <Route path="/Citizenservices/Documents" element={<Documents/>} />
              <Route path="/Citizenservices/schemes" element={<Scheme/>} />
              <Route path="/Citizenservices/student" element={<Student/>} />
              <Route path="/sign-up" element={<SigupComponent/>} />
              <Route path="/sign-in" element={<LoginComponent/>} />
              <Route path='/Users' element={<Users/>}/>
              <Route path="/Userprofile" element={<Userprofile/>}></Route>
              <Route path="/reset" element={<ResetProfile/>}></Route>
            </Routes>
            {/* <ImageUpload/> */}
        </Router>
         </div>
      }
export default Routing;