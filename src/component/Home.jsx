import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../App.css"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { UesersData, userLogOut } from "./redux/action";


function Navbar() {
  const [Next, setNext] = useState(1)
  const [buttonDisbale, setButtonDisbale] = useState(false)
  const Dispatch = useDispatch()
  const reduxData = useSelector((state) => state.UserReducer.userValue)
  const[modals,setModal]= useState("")

  const [userValue, setValue] = useState({
    email: "",
    password: ""
  })
  const Changer = (e) => {
    const { name, value } = e.target
    setValue({ ...userValue, [name]: value })
  }
  async function SubmitHandler() {
    if (userValue.email && userValue.password) {
      axios.post("http://localhost:9002/login", userValue).then((result) => {
        if (result.data.message !== 'User not registered') {
          setModal("modal")
          Dispatch(UesersData(result.data.user))
          setValue({
            email: "",
            password: ""
          })
          toast.success(result.data.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            setButtonDisbale(false)
          }, 3000)
        } else {
          toast.error(result.data.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            setButtonDisbale(false)
          }, 3000)
        }
      })
    } else {
      toast.warn('invalid. Please correct your Details !', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        setButtonDisbale(false)
      }, 3000)
    }
  }
  const [click, setClick] = useState(false)
  const Handel = () => {
    setClick(!click)
  }
  const usersLogOut = ()=>{
    Dispatch(userLogOut())
  }


  return (
    <>
      <div className="container-fluid bg-primary">
        <div className="container">
          <div className="row">
            <div className="col">
              <nav className="navbar navbar-expand-lg Link_color">
                <NavLink to="/" className="navbar-brand mr-4 font-weight-bold text-reset"> KRISHU </NavLink>
                <div className=" col-sm-5 my-2 p-0 order-sm-0  order-2">
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
                <button className="navbar-toggler text-white" data-toggle="collapse" data-target="#mymenu" onClick={Handel} >
                  <i className={(click) ? "fas fa-times" : "fas fa-align-center"}></i>
                </button>
                <div className="collapse navbar-collapse ml-auto" id="mymenu">
                  <ul className="navbar-nav ml-auto order-sm-1 order-1 nav-fills font-weight-bolder">
                    <li className="nav-item">
                      <NavLink exact to="/" className="nav-link text-reset " activeClassName="Active_Link"   > Home  </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink exact to="/courses" className="nav-link text-reset" activeClassName="Active_Link" > Courses </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink exact to="/service" className="nav-link text-reset" activeClassName="Active_Link" > Service </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink exact to="/contact" className="nav-link text-reset " activeClassName="Active_Link" > Contact </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/about" className="nav-link text-reset " activeClassName="Active_Link" > About </NavLink>
                    </li>
                    {reduxData[0] == undefined ? <Button
                      data-toggle="modal"
                      color="secondary"
                      variant="contained"
                      size="small"
                      className=" order-sm-0  order-2"
                      data-target="#exampleModalCenter">Login </Button> : <Button
                      //  color="secondary"
                      //   variant="contained"
                      //   size="small"
                        onClick={usersLogOut}
                        className=" order-sm-0  order-2">LogOut</Button>
                    }
                  </ul>
                  <div
                    className="modal fade "
                    id="exampleModalCenter"
                    // tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >

                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      {/* <div className="modal-content">
                        <div className="modal-header">
                          <div className=" container mt-5 d-flex justify-content-center">
                            <div className="d-flex justify-content-center pt-5 h-100">
                              <div className="user_card">
                                <div className="d-flex justify-content-center">
                                  <div className="brand_logo_container">
                                    <img
                                      // src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                                      src="https://i.imgur.com/6b6psnA.png"
                                      className="brand_logo"
                                      alt="Logo"
                                    />
                                  </div>
                                </div>
                                <div className="d-flex justify-content-center form_container">
                                  <form >
                                    {Next <= 1 ?
                                      <div className="input-group px-4  mt-1">
                                        <div className="input-group-append">
                                          <span className="input-group-text">
                                            <i className="fas fa-user" />
                                          </span>
                                        </div>
                                        <input
                                          type="text"
                                          name="email"
                                          onChange={Changer}
                                          value={userValue.email}
                                          className="form-control input_user"
                                          placeholder="username"
                                        />
                                        <div className="input-group mt-4  mb-2">
                                          <div className="input-group-append">
                                            <span className="input-group-text">
                                              <i className="fas fa-key" />
                                            </span>
                                          </div>
                                          <input
                                            type="text"
                                            value={userValue.password}
                                            name='password'
                                            onChange={Changer}
                                            className="form-control input_pass"
                                            placeholder="password"
                                          />
                                        </div>
                                      </div> : null
                                    }
                                    <div className="form-group px-4">
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="customControlInline"
                                        />
                                        <label
                                          className="custom-control-label"
                                          htmlFor="customControlInline"
                                        >
                                          Remember me
                                        </label>
                                      </div>
                                    </div>
                                    <div className="d-flex justify-content-center mt-3 login_container">

                                      <button
                                        type="button"
                                        onClick={SubmitHandler}
                                        name="button"
                                        disabled={buttonDisbale}
                                        className="btn login_btn"
                                      >
                                        Login Now
                                      </button>
                                      <ToastContainer
                                        position="top-right"
                                        autoClose={2000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                      />
                                      <ToastContainer />
                                    </div>
                                  </form>
                                </div>
                                <div className="mt-4">
                                  <div className="d-flex justify-content-center links">
                                    Don't have an account?{" "}
                                    {/* <NavLink to="/contact" className="nav-link text-reset " activeClassName="Active_Link" > About Us   </NavLink> */}
                                    {/* <a href="/contact" className="ml-2">
                                      Sign Up
                                    </a>
                                  </div>
                                  <div className="d-flex justify-content-center links">
                                    <a href="#">Forgot your password?</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */} 

                      <div className="modal-content ">
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
                        <div className="modal-body text-dark " >
                          <form method="Post " p={5}>
                               <TextField id="outlined-basic"
                                   name="email"
                                   onChange={Changer}
                                   value={userValue.email}
                              className="form-control"
                              size="small"
                              required
                                label="Username" variant="outlined" />
                            <br />
                            <TextField
                               className="form-control my-4"
                               required  maxLength="8"
                               label="Password"
                              size="small"
                             variant="outlined"
                             value={userValue.password}
                             name='password'
                             onChange={Changer}
                            />
                          </form>
                        </div>
                        <div className="modal-footer">
                          <Button variant="contained"
                            data-dismiss="modal"
                            className="mr-2"
                          >Close</Button>
                          <Button variant="contained"
                          data-dismiss={modals == "modal" ? modals : null }
                           onClick={SubmitHandler}
                           name="button"
                           disabled={buttonDisbale}
                           className="btn login_btn"
                           color="primary">
                            Login 
                        </Button>
                     
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
      <ToastContainer
                                        position="top-right"
                                        autoClose={2000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                      />
                                      <ToastContainer />
    </>
  );
}
export default Navbar;
