import React from 'react'
import seo from "./seo.jpg"


function Servises(props) {
    return (
        <>
        <div className="col-md-6">
            <h2 className="text-danger"> Search Engine Opimizatione <br/> ( SEO ) </h2>
            <p className="lead"> Using a strategc  mix of techniques such as contact marketing  off-site SEO and technical architecture 
                      opimization we improve your search ranking to increase organic visiblty and generate quality traffic our   
                      comprehensive SEO servic  ensure that your wabsite rank high in search resultes of leading engines such a google yahoo!
                      and bing whenever a relevant search query is mode, </p> 
        </div>
        <div className="col-md-6">
            <img src={seo} className="img-fluid rounded"  alt=""/>
        </div>
        </>
    )
}
export default Servises
