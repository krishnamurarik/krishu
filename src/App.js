import React from 'react'
import {BrowserRouter as Router , Route} from "react-router-dom"
import Home from "./Home_page"
import Service from "./component/Service_comp/Service"
import Contact from './component/Cnt_Comp/Contact'
import Courses from './component/Cous_comp/Courses'
import About from './component/About_comp/About'

function Routing() {
    return (
        <div>
            <Router>
            <Route exact path="/" component={Home } />
            <Route exact path="/courses" component={Courses } />
            <Route exact path="/service" component={ Service } />
            <Route exact  path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            </Router>
        </div>
    )
}

export default Routing
