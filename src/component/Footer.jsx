import React from "react";
import Footer_card from "./Footer_card";
import InfoFooter from "./Info_footer";

function footer() {
  return (
    <div>
      <div className="container py-0">
        <div className="row text-center mb-md-  Footer-card ">
          <Footer_card />
        </div>
      </div>
      <div className="container-fluid bg-primary pt-5 text-white">
        <div className="container">
          <div className="row pt-md-5 pt-5    no-gutters">
            <InfoFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
