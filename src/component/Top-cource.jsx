import React from 'react'
import Cource from "./Courcec";
import Basice from "./Our_Basice"
// import all from "../images/all-in-one.jpg";
// import pic from "../images/"
// import python from "../images/python.jpg";
// import js from "../images/javascrip.jpg";
  function Courcec() {
      return(
            <div>
                < Basice Course="top courses" />
                  <div className="container mt-4 ">
                   <div className="row m-auto  justify-content-center justify-content-around">
                     <Cource  img="https://i.ytimg.com/vi/f8G_MJIqAFc/maxresdefault.jpg"  heading="all in one" pera="shagun garg" wrpc="2999" price="1999" />   
                     <Cource img="https://analyticsindiamag.com/wp-content/uploads/2019/10/python-1.jpg" heading=" core python " pera="shagun garg" wrpc="1999" price="1499" />   
                     <Cource img="https://miro.medium.com/max/840/1*8nfBRAssY0DuETYwdwyqqw.png" heading="javascript &#38; es6" pera="shagun developer" wrpc="3499" price="2999" />   
                  </div>
                  <div className="row">     
                   <div className="col text-center">
                      <button type="button" class="btn btn-primary font-weight-bold all-Courses">All Courses </button>
                    </div>
                   </div>  
                 </div>
            </div>
      )
  }
  export default Courcec;