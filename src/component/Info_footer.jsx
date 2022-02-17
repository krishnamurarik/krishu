import React from 'react'

function info_footer() {

    return (
        <>
        <div className="col-md-4">
            <h2> inforamatione  </h2>
            <p> <i className=" mr-1 fas fa-envelope"></i> krishnamurarik10@gmail.com </p>
            <p> <i className=" mr-1 fas fa-mobile-alt"></i> +91 8192908078</p>
            <p>Affiliate Policy</p>
            <p>Refund policy </p>
        </div>
        <div className="col-md-4  no-gutters">
              <h2>Company</h2>
              <p>Aboute us </p>
              <p>Contact us </p>
              <p>privacy policy </p>
              <p>FAQs</p>
              <p>Terms  of use </p>
        </div>
        <div className="col-md-4">
            <h2>Social Media </h2>
            <div className="d-inline-flex my-4 Social">
                <a href="https://studio.youtube.com/channel/UCJkdNXTfd7q9RMP_-l24xng"  >  <i className="mx-2  text-danger fab fa-youtube"></i></a >
                <a href="https://www.facebook.com/kirsan.muraree" ><i className=" mx-2 text-white fab fa-facebook-square"></i></a >
                <a href="https://www.instagram.com/kushwah6872/" ><i className=" mx-2 text-danger fab fa-instagram"></i></a >
                <a href="google.com"  ><i className=" mx-2 text-white fab fa-twitter-square"></i></a >
            </div>
        </div>
        </>
    )
}

export default info_footer ;
