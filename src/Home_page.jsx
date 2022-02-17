import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import  "./App.css";
import Nabvar from "./component/Home";
import Header from "./component/Header";
import Plan from "./component/Plan";
import Courcec from "./component/Top-cource";
import Bloge from "./component/Bloge";
import Mobile from "./component/Mobile";
import Footer from "./component/Footer";
     function App() {
     
        return(     
           <>
                <Nabvar /> 
                <Header/>
                <Plan/>
                <Courcec />
                <Bloge></Bloge>
                <Mobile></Mobile>
                <Footer/>
           </>
        );
  };
 export default App;



 
