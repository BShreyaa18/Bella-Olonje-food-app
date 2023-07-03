import React from "react";
import logo from "./Bella Olonje logo 111 1.png";
function Heading()
{
    
    return(
        <div className="container">
     <header className="d-flex flex-wrap justify-content-center"> 
      <a href="/" className="d-flex align-items-center  mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <img src={logo} className="logod" />
      </a>
      <ul className="nav nav-pills mt-5 vclassName">
        <li className="nav-item me-5 list">Home</li>
        <li className="nav-item me-5">Product</li>
        <li className="nav-item me-5">FAQ</li>
        <li className="nav-item">Contact</li>
      </ul>
      <div className="burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header> 
  </div>
    );
}

export default Heading;