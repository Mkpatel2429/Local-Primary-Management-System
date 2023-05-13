import React from 'react'

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from 'react-paginate';
import { useRef,useState,useEffect } from "react";
import AdminNavbar from './AdminNavbar';
function Admindashboard() {
    const [data, setData] = useState([]);
  const [limit,setLimit]=useState(5);
  const [pageCount,setPageCount]=useState(1);
  const currentPage=useRef();

  useEffect(() => {
    currentPage.current=1;
    // getAllUser();
    getPaginatedUsers();
  }, []);


  //fetching all user
  const getAllUser = () => {
    fetch("http://localhost:3001/getAllUser", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, "userData");
        setData(data.data);
      });
  };



//logout
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };


  //deleting user
  const deleteUser = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      fetch("http://localhost:3001/deleteUser", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          id: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getAllUser();
        });
    } else {
    }
  };

  //pagination
  function handlePageClick(e) {
    console.log(e);
   currentPage.current=e.selected+1;
    getPaginatedUsers();
   

  }
  function changeLimit(){
    currentPage.current=1;
    getPaginatedUsers();
  }

  function getPaginatedUsers(){
    fetch(`http://localhost:3001/paginatedUsers?page=${currentPage.current}&limit=${limit}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setPageCount(data.pageCount);
        setData(data.result)
      });

  }
  return (
    
    <div>
      <AdminNavbar/>
      <h1 style={{marginLeft:"35.8%",paddingTop:"1%",color:"#032154"}}>Welcome To Admin</h1>
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
                     <th style={{fontSize:"15px"}}>Name</th>
                     <th style={{fontSize:"15px"}}>Email</th>
                     <th style={{fontSize:"15px"}}>User-Type</th>
			   <th style={{fontSize:"15px"}}>Delete</th>
                   </tr>
                 </thead>
                 <tbody>
                   {data.map((i) => {
          return (
            <tr>
              <td>{i._id}</td>
              <td>{i.fname}</td>
              <td>{i.email}</td>
              <td>{i.userType}</td>
              <td>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => deleteUser(i._id,i.fname)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
           
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
      <input placeholder="Limit" onChange={e=>setLimit(e.target.value)}/>
      <button onClick={changeLimit}>Set Limit</button>
      </div>
         </div>
      </div>
   </div>
</section>
</div>
  )
}

export default Admindashboard