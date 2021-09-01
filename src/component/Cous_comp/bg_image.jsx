import React from 'react'
import com from "./img/banner1.jpg"

function bg_image() {
    return (
        <div className="container-fluid bg-image p-0">
            <img src={com} className="img-fluid w-100 "  alt=""/>
        </div>
    )
}

export default bg_image
