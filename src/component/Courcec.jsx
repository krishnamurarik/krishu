import React from 'react'

    var Courcec = (props)=>{
     return(
                   <div  className="col-md-4  col-sm-6 mb-4 shadow-lg px-3  border  card-crs "  >
                      <div className="card  border-0 cource mt-1 mt-md-0 text-capitalize">
                          <img src={props.img} className="rounded card-img "  alt="all in one"/>
                          <div className="card-body  text-center ">
                              <h2  className="font-weight-bold"  >{props.heading}</h2>
                              <p className="lead">  {props.pera} </p>
                              <div className="d-inline-flex">
                              <h5 className="mx-2 font-weight-bold text-muted "><s> &#x20B9; {props.wrpc} </s> </h5>
                              <h5 className="font-weight-bold  text-success"> &#x20B9;{props.price} </h5>
                              </div>
                              <br/>
                              <button  className="btn  font-weight-bold btn-top px-" id="btn" > VIEW</button>
                          </div>
                      </div>
                   </div>
     );
    }
 
 export default Courcec;