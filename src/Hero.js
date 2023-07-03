import React from "react";
function Hero()
{
    return(
      <div className="background">
        <div className="px-4 py-5 my-1 text-center">
        <div className="container mt-5 py-3">
        <p className="mb-3">Food app</p>
        <h1 className="display-5 fw-bold " >Why stay hungry when you can order from Bella Olonje </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 mt-4">Download the Bella Olonje's food app now.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn  buttons btn-1 btn-lg px-4 gap-3" fdprocessedid="43aj1">Playstore</button>
            <button type="button" className="btn buttons btn2 btn-outline-light btn-lg px-4" fdprocessedid="5w23o">App store</button>
          </div>
        </div> 
        </div>
        </div>
      </div>  
    );
}
export default Hero;