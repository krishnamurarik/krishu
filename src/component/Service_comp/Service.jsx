import React from 'react';
import Home from "../Home";
import Andriod from './Andriod';
import Servises from "./Servises";
import Basic from "../Our_Basice";
import Footer from "../Footer";
import Jumbo from "./Service_jumbo"

function Service() {
    return (
        <>
            <Home/>
            <Jumbo/>
            <div className="container-fluid Service_bg">
                <div className="container">
                <div className="row align-items-center">
                 <Basic Course="SEO" />
                    <Servises/>
                    <Basic Course="ANDROID" />
                    <Andriod/>
                    </div>
                </div>
            </div>
      <Footer/>
        </>
    )
}

export default Service
