import React from "react";
import logo from "./Bella Olonje logo 111 1.png";
import logos from "./Vector.png";
import logos1 from "./Vector (1).png";
import logos2 from "./Vector (2).png";
function Footer(){
    return(
        <div>
        <div className="default">
  <footer className="d-flex flex-wrap align-items-center py-3 my-4 ">
  
  <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <img src={logo} />
    </a>
   <ul className="nav col-md-4">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary"><img src={logos} /></a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary"><img src={logos1} /></a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary"><img src={logos2} /></a></li>

    </ul>
    <p className="col-md-2 mb-0 ">Copyright 2020 Bella Olonje.com</p>
    
  </footer>
  </div>
  <div className="container media-query">
  <footer >
    <ul className="nav justify-content-center pb-3 mb-3">
    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary"><img src={logos} /></a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary"><img src={logos1} /></a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary"><img src={logos2} /></a></li>
    </ul>
    <p className="text-center text-body-secondary ms-3">Just type what's on your mind and we'll see.</p>
  </footer>
</div>
</div>
    );
}
export default Footer;