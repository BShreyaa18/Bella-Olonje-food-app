import React from 'react';
import logo1 from "./Rectangle.png";
import logo2 from "./Rectangle (1).png";
import logo3 from "./Rectangle (2).png";

function Carousel()
{
    return(
        <div className="container">
        <hr className="cstyle1" />
        <div><h3 className="shift">How the App works</h3></div>
        <hr className="cstyle2" />
        <div className="row featurette ">
      <div className="col-md-7 content">
        <span className="txtt mt-1 ">Create an account.</span>
        <h2 className="featurette-heading fw-normal lh-1 mt-1">Create/Login to an existing account to get started. </h2>
        <p className="lead mt-1">An account is created with your email and a desired password.</p>
      </div>
      <div className="col-md-5 icons">
      <img src={logo1}  />
      </div>
    </div>
    <div className="row featurette  ">
      <div className="col-md-7 order-md-2 content">
      <span className="txtt mt-1">Explore varieties.</span>
        <h2 className="featurette-heading fw-normal lh-1 mt-1">Shop for your favorite meals as e day hot. </h2>
        <p className="lead mt-1">Shop for your favorite meals or drinks and enjoy while doing it.</p>
      </div>
      <div className="col-md-5 order-md-1 icons">
      <img src={logo2}   />
      </div>
    </div>
    <div className="row featurette">
      <div className="col-md-7 content">
      <span className="txtt mt-1">Checkout</span>
        <h2 className="featurette-heading fw-normal lh-1 mt-1">When you done check out and get it delivered.</h2>
        <p className="lead mt-1">When you done check out and get it delivered with ease.</p>
      </div>
      <div className="col-md-5 icons">
      <img src={logo3} />
      </div>
    </div>
    </div>
    );
}
export default Carousel;