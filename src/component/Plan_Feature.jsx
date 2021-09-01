import React from 'react'
function Feature(props) {
    return(
                 <div className="col-md-4 col-sm-6  mb-md-3 mb-2 text-center ">
                 <div className="card  plan h-100  w-100 ">
                     <div className="display-4 my-1 p-0 text-dark"> <i className={ props.icon }></i></div>
                      <div className="card-body">
                       <h6 className="text-uppercase" >{props.heading}</h6>
                       <p className="card-text text-muted text-capitalize">{props.pera} </p>
                    </div>
                 </div>
                 </div>
    )
};
export default Feature;