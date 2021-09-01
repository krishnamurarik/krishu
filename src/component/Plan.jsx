import React from "react";
import Feature from "./Plan_Feature";
import Our_Basice from "./Our_Basice";

function Plan() {
    return(
        <React.Fragment>
         <div className="container">
             <Our_Basice Course="our basice plan features" />
                <div className="row d-flex text-center">
                <Feature icon=" fas fa-laptop-code" heading ="learn clean coding" pera="learn best coding patterns and practices to make your code more scalable" />
                <Feature icon=" fas fa-graduation-cap" heading ="learn best coding " pera="educate yourself with the top-notch study material designed by the experts." />
                <Feature icon="fas fa-chalkboard-teacher" heading ="world-class faculty" pera=" learn form the accomplished teachers with an in-depth understading of the subject." />
                <Feature icon="fas fa-file-video" heading ="live classes" pera=" learn ancepts, practice questions  &#38; get your doubts cleared instantly in the live classes. " />
                < Feature icon=" fab fa-wpforms" heading=" student discussion forum" pera="get access to 24*7 live discussion group with batchmates  &#38; faculties,"/>
                < Feature icon="fas fa-file-alt" heading="quize  &#38; assignments" pera="practice chapter-wise Quzzes  &#38; solv assignments to lean and revise concepts, "/>
                < Feature icon="fas fa-photo-video" heading="video lectures" pera="learn thought high-quality  &#38; easy to understand video lectures,"/>
                < Feature icon="fas fa-book-reader" heading="e-books" pera="get importand topice  &#38; formulas for last-minute revision in the PDF format."/>
                < Feature icon="fas fa-bell-slash" heading="alert  &#38; notification " pera="stay up to date  &#38; get notifield every time the course content is updated."/>
              </div>
            </div>
        </React.Fragment>
    )
}
export default Plan;