import React,  {useState} from "react";
import {NavLink } from "react-router-dom"
import "../App.css"

function Navbar() {
const [click, setClick] = useState(false)
const [use,setuser] = useState("")

  const  Handel = ()=>{
      setClick(!click)   
  }
  const Changer = (e)=>{
    setuser(e.target.value)
  }
    const Login = (e)=>{
      console.log(use)
      setuser( e.target.value)
      alert(`hello  ${use} thank your Login page ` )
    }
  return (
    <>
      <div className="container-fluid bg-primary">
        <div className="container">
          <div className="row">
            <div className="col">
              <nav className="navbar navbar-expand-lg Link_color">
                <NavLink to="/" className="navbar-brand mr-4 font-weight-bold text-reset"> KRISHU </NavLink>
                <div className="-4 col-sm-5 order-sm-0 my-2 p-0 order-2">
                  <input type="text"  className="form-control" placeholder="Search"  />
                </div>
                <button className="navbar-toggler text-white" data-toggle="collapse" data-target="#mymenu"  onClick={Handel} >
                  <i className={( click ) ? "fas fa-times" : "fas fa-align-center"  }></i>
                </button>
                <div className="collapse navbar-collapse ml-auto" id="mymenu">
                  <ul className="navbar-nav ml-auto order-sm-1 order-1 nav-fills font-weight-bolder">
                    <li className="nav-item">
                      <NavLink exact  to="/" className="nav-link text-reset " activeClassName="Active_Link"   > Home  </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink exact  to="/courses"  className="nav-link text-reset"  activeClassName="Active_Link" > Courses </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink exact  to="/service"   className="nav-link text-reset"  activeClassName="Active_Link" > Service </NavLink>
                      </li>
                    <li className="nav-item">
                      <NavLink exact  to="/contact"  className="nav-link text-reset "  activeClassName="Active_Link" > Contact Us  </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink exact  to="/about"  className="nav-link text-reset "  activeClassName="Active_Link" > About Us   </NavLink>
                    </li>
                    <button type="button" className="btn btn-outline-dark my-lg-0 my-2 text-white font-weight-bold mx-lg-2"
                      data-toggle="modal"
                      data-target="#exampleModalCenter">Login </button>
                  </ul>
                  <div
                    className="modal fade"
                    id="exampleModalCenter"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title text-dark"
                            id="exampleModalLongTitle"
                          >
                            Login Form{" "}
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body text-dark">
                          <form method="Post">
                            <label>Username </label>
                            <input
                              type="text"
                              onChange={Changer}
                              value={use}
                              className="form-control"
                              placeholder="username"
                              required
                            />
                            <br />
                            <label>Password</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="password"
                              required  maxLength="8"
                            />
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" onClick={Login} className="btn btn-primary">
                            Login Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
