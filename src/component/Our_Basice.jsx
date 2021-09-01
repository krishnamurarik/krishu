import React from 'react'

function Our_Basice(props) {
    return(
            <div className="container my-4">
            <div className="row">
                <div className="col  text-center text-primary text-capitalize">
                    <h1 className=" font-weight-bold mt-3 ">  {props.Course} </h1>
                </div>
              </div>
              <div className="row">
                  <div className="col text-center  ">
                      <div className=" d-inline-flex align-items-center">
                      <h2 className="mt-n4" id="icon"></h2>
                      <i class=" mx-2 far fa-handshake" ></i>
                      <h2 className="mt-n4" id="icon"></h2>
                      </div>
                  </div>
              </div>
            </div>
    )
};
export default Our_Basice;
