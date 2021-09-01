import React from 'react'
import Home from "../Home"
import Form from "./Form"
import Footer from "../Footer"

function Contact() {
 
    return (
        <>
            <Home/>
         <div className="container-fluid Contact">
             <div className="container py-5">
                 <div className="row">
                  <Form/>
                 </div>
             </div>
         </div>
         <Footer/>
        </>
    )
}

export default Contact; 
