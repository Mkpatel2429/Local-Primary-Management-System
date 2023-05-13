import React, { Component, useEffect,useState } from 'react'


import UserHome from './userHome'
import AdminHome from './adminHome'
import Serviceprovider from './Serviceprovider';
// import AdminDashBoard from './AdminDashBoard'
// const Lock = require('async-lock');
// const rateLimit=require('express-rate-limit')

// const limiter = rateLimit({
// 	windowMs: 1000, // 15 minutes
// 	max: 2, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
// 	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
// 	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
// })
function Users () {
  const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);
  const [serviceProvider,setServiceProvider]=useState(false);

      useEffect(()=>{
        fetch("http://localhost:3001/userData",{
          method:"POST",
          crossDomain:true,
          headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
          },
          body:JSON.stringify({
            token: window.localStorage.getItem("token"),
          })
        }).then((res) => res.json()).then((data) => {
          if (data.data.userType == "Admin") {
            window.localStorage.setItem('Admin',true);
            setAdmin(true);
          }

          if(data.data.userType=="Service Provider"){
            window.localStorage.setItem("Service Provider",true)
            setServiceProvider(true);
          }
            setUserData(data.data);
            if (data.data == "token expired") {
              alert("Token expired login again");
               window.localStorage.clear();
              window.location.href = "./sign-in";
            }
          });
        },[])
        if(admin){
          return admin ? <AdminHome/> : <UserHome userData={userData} />;
        }
        else{
          return serviceProvider ? <Serviceprovider/> : <UserHome userData={userData} />
        }
      }
      export default Users;
{/* <div>
  {/* <Navbar/> */}
//   <section className="vh-100" style={{backgroundColor: "#eee"}}>
//   <div className="container py-5 h-100">
//     <div className="row d-flex justify-content-center align-items-center h-100">
//       <div className="col-md-12 col-xl-4">

//         <div className="card" style={{borderRadius: "15px"}}>
//           <div className="card-body text-center">
//             <div className="mt-3 mb-4">
//               <img src={image1}
//                 className="rounded-circle img-fluid"style={{width: "100px"}} />
//             </div>
//             <h4 className="mb-2">{userData.fname}</h4>
//             <p className="text-muted mb-4">{userData.email}</p>
//             <div className="mb-4 pb-2">
//               <button type="button" className="btn btn-outline-primary btn-floating">
//                 <i className="fab fa-facebook-f fa-lg"></i>
//               </button>
//               <button type="button" className="btn btn-outline-primary btn-floating">
//                 <i className="fab fa-twitter fa-lg"></i>
//               </button>
//               <button type="button" className="btn btn-outline-primary btn-floating">
//                 <i className="fab fa-skype fa-lg"></i>
//               </button>
//             </div>
//             <button type="button" className="btn btn-outline-primary btn-rounded btn-lg" onClick={logOut}>
//             Logout
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   </div>
// </section>
// <Footer/>
// </div> */}

