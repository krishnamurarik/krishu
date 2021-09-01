import React from 'react'

function Card(props) {
    return (
    <>
    <div className="col-lg-4 col-sm-6   w-100 py-2 mx-auto Crs">
    <div className="card bg-transparent h-100 text-white" >
        <img className="card-img-top h-50 card-img" id="card-img" src={props.img} />
        <div className="card-body Crs_card">
          <div className="Crs_heding" >
          <h4  className="card-title text-nowrap text-danger font-weight-bolder text-uppercase">  {props.heding} COURSE </h4>
          </div>
          <hr className="m-0"/>       
          <p className="card-text my-lg-4 my-2  text-truncate">Addvane to Learning Begnner Course.</p>
        <button href="#" className="btn btn-primary   text-truncate">GoTo Course  </button>
        </div>
      </div>
    </div>
    </>
    );
}

export default Card
