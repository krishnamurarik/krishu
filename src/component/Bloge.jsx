import React from 'react'
import Bloges from "./Bloges";
import Basice from "./Our_Basice"
import cover1 from "../images/cover.jpg"
import cover2 from "../images/cover (2).jpg"
import cover3 from "../images/cover (1).jpg"



function Bloge() {
    return (
        <div className="container mt-5">
                < Basice Course="our bloge" />
         <div className="row">
           <Bloges img={cover1} hdn="node.js wabsocket" hdh="chat app" pera="in this video we will discuss and check that   how to use wabsockets..." ></Bloges>
           <Bloges img={cover3} hdn="upload video to " hdh="anguler 9 " pera="in this video we will discuss and check that   how to use wabsockets..." ></Bloges>
          <Bloges img={cover2} hdn="anguler 9 common" hdh="header and footer " pera="in this video we will discuss and check that   how to use wabsockets..." ></Bloges>
       </div>
       <div className="row">     
                   <div className="col text-center">
                      <button type="button" class="btn btn-primary font-weight-bold all-Courses my-4"> All Bloges </button>
                  </div>
              </div> 
     </div> 
    )
}
export default Bloge
