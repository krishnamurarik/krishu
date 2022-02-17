import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router , Route,Switch,Link } from "react-router-dom"
import Home from "./Home_page"
import Service from "./component/Service_comp/Service"
import Contact from './component/Cnt_Comp/Contact'
import Courses from './component/Cous_comp/Courses'
import About from './component/About_comp/About'
import * as bookLoader from "./component/lotties/28893-book-loading.json"
import Lottie from "react-lottie";
import NotFound  from './images/not-found.svg'

const PageNotFound = ()=>{
 
  return(
    <>
       <main>
        <div class="container">
          <section class="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
            <h1>404</h1>
            <h2>The page you are looking for doesn't exist.</h2>
            <Link class="btn btn-primary" to="/">Back to home</Link>
            <img src={NotFound} class="img-fluid py-5 w-50" alt="Page Not Found" />
            <div class="credits">
            </div>
          </section>

        </div>
      </main></>
  )
}

function Routing() {
    const [Loader, setLoader] = useState(false)

    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: bookLoader.default,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      useEffect(() => {
          setTimeout(()=>{
            setLoader(true)
        },2000)
      }, [])

    return (
        <div>{!Loader ?  <div
            style={{
              margin: "auto",
              width: "fit-content",
              height: "fit-content",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0
            }}
          >
            <Lottie options={defaultOptions1} height={300} width={300} /> 
          </div> :  <Router>
            <Switch>
            <Route exact path="/" component={Home } />
            <Route exact path="/courses" component={Courses } />
            <Route exact path="/service" component={ Service } />
            <Route exact  path="/contact" component={Contact} />
            <Route  path="/about" component={About} />
            <Route  path="*" component={PageNotFound} />
            </Switch>
            </Router> }
           
        </div>
    )
}

export default Routing
