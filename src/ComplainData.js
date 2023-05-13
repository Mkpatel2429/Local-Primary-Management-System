import React from 'react'
import Navbar from './Navbar';
import { useState,useEffect,useRef } from 'react';
import logo from './Images/logo.png'
// import admin from './Images/Admin.png'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFont } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';
// import './js/Toggle'
import './css/Admin.css'
import { useLocation } from 'react-router-dom';

function ComplainData() {
    const Admin = window.localStorage.getItem("Admin");
    // const [userData, setUserData] = useState("");
    const [complainData,setcomplainData]=useState("")
    const [data, setData] = useState([]);
    const [limit,setLimit]=useState(5);
    const [pageCount,setPageCount]=useState(1);
    const currentPage=useRef();

     const logOut=()=>{
      window.localStorage.clear();
      window.location.href='/';
    }

    useEffect(()=>{
        fetch("http://localhost:3001/userComplains",{
          method:"POST",
          crossDomain:true,
          headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
          },
          body:JSON.stringify({
            id: window.localStorage.getItem("id"),
            //token: window.localStorage.getItem("token"),
        })
        }).then((res) => res.json()).then((data) => {
            // console.log(data);
            setcomplainData(data.data)
            
          });
          var el = document.getElementById("wrapper");
          var toggleButton = document.getElementById("menu-toggle");
      
          toggleButton.onclick = ()=> {
              el.classList.toggle("toggled");
          }
        },[])

          const getAllComplain = () => {
            fetch("http://localhost:3001/getAllComplain", {
              method: "GET",
            })
              .then((res) => res.json())
              .then((data) => {
                // console.log(data, "userData");
                setData(data.data);
              });
          };

          const SendData=(id,fullname)=>{
            if (window.confirm(`Are you sure you want to send ${fullname}`)) {
              fetch("http://localhost:3001/SendData", {
                method: "POST",
                crossDomain: true,
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                  id:id,
                }),
              })
                .then((res) => res.json())
                .then((data) => {
                   if(data.status=="ok"){
                      alert("Successfully send")
                   }
                  // getAllComplain();
                });
            } else {
            }
          }

        useEffect(() => {
          currentPage.current=1;
          // getAllUser();
          getPaginatedComplain();
        }, []);
      
        const deleteComplain = (id,fullname) => {
            if (window.confirm(`Are you sure you want to delete ${fullname}`)) {
              fetch("http://localhost:3001/deleteComplain", {
                method: "POST",
                crossDomain: true,
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                  id:id,
                }),
              })
                .then((res) => res.json())
                .then((data) => {
                  alert(data.data);
                  getAllComplain();
                });
            } else {
            }
          };
       

        function handlePageClick(e) {
            console.log(e);
           currentPage.current=e.selected+1;
            getPaginatedComplain()
          }
          function changeLimit(){
            currentPage.current=1;
            getPaginatedComplain();
          }
          function getPaginatedComplain(){
            fetch(`http://localhost:3001/paginatedComplain?page=${currentPage.current}&limit=${limit}`, {
              method: "GET",
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data, "complainData");
                setPageCount(data.pageCount);
                setData(data.result)
              });
          }

          
  return (
    <div>
        {Admin=="true"? 
    <div className="d-flex" id="wrapper">
    <div className="bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                className="fas fa-user-secret me-2"></i><img style={{"width":"70px"}}src={logo} alt="LPMS" srcset=""/></div>
        <div className="list-group list-group-flush my-3">
            <a href="/adminData" className="list-group-item list-group-item-action bg-transparent second-text active"><i
                    className="fas fa-tachometer-alt me-2"></i>Dashboard</a>
            <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                    className="fas fa-comment-dots me-2"></i>Services</a>
            <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                    className="fas fa-map-marker-alt me-2"></i>Complain</a>
            <a href="#" className="list-group-item list-group-item-action bg-transparent text-danger fw-bold" onClick={logOut}><i
                    className="fas fa-power-off me-2" ></i>Logout</a>
        </div>
    </div>
  
    <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
            <div className="d-flex align-items-center">
                <i className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
                <h2 className="fs-2 m-0">Complain</h2>
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle second-text fw-bold" href="/adminDashboard" id="navbarDropdown"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-user me-2"></i>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#" onClick={logOut}>Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="container-fluid px-1" style={{overflowX:"auto"}}>
        <div className="row my-1">
                    <h3 className="fs-2 mb-1">Registered Complains</h3>
                    <div className="col" >
                        <table className="table bg-white rounded shadow-sm table-hover" >
                                <tr>
                                    <th scope="col">Fullname</th>
                                    <th scope="col">Address1</th>
                                    <th scope="col">Address2</th>
                                    <th scope="col">Zipcode</th>
                                    <th scope="col">City</th>
                                    <th scope="col">State</th>
                                    <th scope="col">Country</th>
                                    <th scope="col">Mobile-No</th>
                                    <th scope="col">File</th>
                                    <th scope="col">Complain</th>
                                    <th scope="col">Send</th>
                                    <th style={{fontSize:"15px"}}>Delete</th>
                                </tr>
                            <tbody>
                   {data.map((i) => {
          return (
            <tr>
              
              <td scope='row'>{i.fullname}</td>
              <td >{i.address1}</td>
              <td >{i.address2}</td>
              <td >{i.zipcode}</td>
              <td >{i.city}</td>
              <td >{i.state}</td>
              <td >{i.country}</td>
              <td >{i.mobileno}</td>
              <td >{i.file}</td>
              <td >{i.complain}</td>
              <td ><button className='btn btn-outline-primary' type="submit" onclick={SendData}>Send</button></td>
              <td >
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => deleteComplain(i._id,i.fullname)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
      </table>
      </div>
      </div>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={2}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
        forcePage={currentPage.current-1}
      />
      <input style={{marginLeft:"35.8%",paddingTop:"0%",marginBottom:"1%"}} placeholder="Limit" onChange={e=>setLimit(e.target.value)} />
      <button className='btn btn-outline-primary btn-sm' onClick={changeLimit}>Set Limit</button>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"></script>
  
      </div>
  </div>
    :<Navbar/>
  }
  </div>
  )
}

export default ComplainData