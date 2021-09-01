import React from 'react'
import Android from "./Andrid.png"


function Andriod() {
    return (
        <>
          <div className="col-md-6  mb-4 order-1">
              <img src={Android} className="img-fluid rounded"  alt=""/>
        </div>
        <div className="col-md-6 order-md-2 mb-4">
            <h2 className="text-danger"> Android   <br/> Technologies  </h2>
            <p className="lead"> The features of mobile phones are the set of capabilities, services and
             applications that they offer to their users.] Handsets with more advanced computing ability
               through the use of native code try to differentiate their own products by implementing additional
                functions to make them more attractive to consumers. This has led to great innovation in mobile 
                phone development over the past 20 years. </p> 
        </div>
        </>
    )
}

export default Andriod
