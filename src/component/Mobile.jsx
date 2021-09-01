import React from "react"
import mobile from "../images/Mobile.png"


  function Mobile (){
    return(
        <div className="container-fluid mobile">
            <div className="container">

            <div className="row">
                <div className="col text-center">
                    <h1 className="py-5 font-weight-bold">DOWNLOADE OUR APP </h1>
                </div>
            </div>
            <div className="row d-flex align-items-center py-1">
                <div className="col-lg-6">
                    <h1 className="display-4 font-weight-bold" >MOBILE APP </h1>
                    <h1 className="display-4 font-weight-bold">FOR <span className="text-primary">STUDENTS </span></h1>
                    <p className="font-weight-bold lead my-3">learn code from anywhere anytime using our appand wabsite. Download it today ! </p>
                    <button type="button" className="btn  play w-50 all-Courses my-3 text-truncate "> <i class="fas fa-play"></i> PLAY STORE </button>
                </div>
                <div className="col-md-6  py-3 d-flex justify-content-center">
                    <img src={mobile} className="img-fluid  mt-3" width="270" alt=""/>
                </div>
            </div>
            </div>
        </div>
    )
  }
  export default Mobile ;