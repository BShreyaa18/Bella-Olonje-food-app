import React from 'react';
import imgs1 from "./Rectangle (3).png";
import imgs2 from "./Rectangle (4).png";
function Body()
{
    return(
        <div className = "container">
        <div className="row">
            <div className="col  main1"><img src={imgs2} className="imgg2" /></div>
            <div className="col  main2"><img src={imgs1} className="imgg1" /></div>
        </div>
        
        
        </div>
        
    );
}
export default Body;