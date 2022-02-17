import React,{memo} from "react";
import CourseCard from "./courseCard";
import Basice from "./Our_Basice";
import Fade from "react-reveal/Fade";




function Courcec() {
  console.log("props",CourseCard)

  return (
    <div>
      <Basice Course="top courses" />
      <div className="container mt-4 ">
        <div className="row m-auto  justify-content-center justify-content-around">
          <Fade left>
            <CourseCard
              img="https://i.ytimg.com/vi/f8G_MJIqAFc/maxresdefault.jpg"
              heading="all in one"
              pera="shagun garg"
              wrpc="2999"
              price="1999"
            />
          </Fade>
          <Fade right>
            <CourseCard
              img="https://analyticsindiamag.com/wp-content/uploads/2019/10/python-1.jpg"
              heading=" core python "
              pera="shagun garg"
              wrpc="1999"
              price="1499"
            />
          </Fade>
          <Fade left>
            <CourseCard
              img="https://miro.medium.com/max/840/1*8nfBRAssY0DuETYwdwyqqw.png"
              heading="javascript &#38; es6"
              pera="shagun developer"
              wrpc="3499"
              price="2999"
            />
          </Fade>
        </div>
        <div className="row">
          <div className="col text-center">
            <button
              type="button"
              class="btn btn-primary font-weight-bold all-Courses"
            >
              All Courses{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Courcec)
