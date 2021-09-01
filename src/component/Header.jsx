import React from 'react'
import image1 from "../images/img1.png"
import image2 from "../images/img2.png"
import image3 from "../images/img3.png"



  function Header() {

    return(
        <React.Fragment>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image1} className="d-block w-100" alt="image1" />
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100" alt="image2" />
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100" alt="image3" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>
        </React.Fragment>
    )
  };
  export default Header;