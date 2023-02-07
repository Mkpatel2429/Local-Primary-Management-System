// import React, { Component } from 'react';
import './App.css';
import logo from './Images/logo.png';
import React, { useState } from "react";
import { Modal, Button, Nav, NavItem, NavLink } from "react-bootstrap";

//import './css/style.css';
// import icon from './assets/logo-hover.png';



function Navbar() {
  const [show, setShow] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const handleClose = () => {
    setShow(false) 
  };
  const handleShow = () => setShow(true);
  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };
  
return (
<>
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img style={{"width":"100px"}}src={logo} alt="LPMS" srcSet="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="/service">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/service">Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/service">About Us</a>
        </li>
      </ul>
       <form class="d-flex" role="search">
      <button  class="btn btn-outline-dark me-2"  onClick={handleShow} onSubmit={onLoginFormSubmit}>Login & SignUp</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Nav className="nav nav-tabs card-header-tabs">
            <NavItem>
              <NavLink
                className={`nav-link ${isLogin ? "active" : ""}`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`nav-link ${!isLogin ? "active" : ""}`}
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </NavLink>
            </NavItem>
          </Nav>
        </Modal.Header>
        <Modal.Body>
          {isLogin ? (
            <form>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                />
              </div>
              <Button variant="primary" type="submit" onSubmit={onLoginFormSubmit}>
                Login
              </Button>
            </form>
          ) : (
            <form>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                />
              </div>
              <Button variant="primary" type="submit" onSubmit={onLoginFormSubmit}>
                Sign Up
              </Button>
            </form>
          )}
        </Modal.Body>
      </Modal>
    </form>
    </div>
  </div>
</nav>
</div>

</>
  )
}
export default Navbar