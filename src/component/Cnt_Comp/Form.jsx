import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const weith = {
    fontSize: "30px",
    color: "orange"
}

function Form() {
    const [buttonDisbale, setButtonDisbale] = useState(false)
    const [ValueInput, setValue] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    })
    // onchange handler
    const Changehandaler = (e) => {
        setValue({ ...ValueInput, [e.target.name]: e.target.value })
    }
    // Submit Handler function   
    const SubmitHandel = async Event => {
        Event.preventDefault();
        setButtonDisbale(true)
        const { name, email, password, cpassword } = ValueInput
        // validation 
        if (name.length > 1, email && password === cpassword) {
            axios.post("http://localhost:9002/register", ValueInput)
                .then((responce) => {
                    // User already registerd throw error
                    if (responce.data.message === "User already registerd") {
                        toast.error(responce.data.message, {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        // state empty
                        setValue({
                            name: "",
                            email: "",
                            password: "",
                            cpassword: ""
                        })
                        setTimeout(() => {
                            setButtonDisbale(false)
                        }, 3000)
                    } else {
                        // Successfully messages
                        if (responce.status == 200) {
                            toast.success(responce.data.message, {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                            // state empty
                            setValue({
                                name: "",
                                email: "",
                                password: "",
                                cpassword: ""
                            })
                            setTimeout(() => {
                                setButtonDisbale(false)
                            }, 3000)

                        }
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
    return (
        <>
            <div className="col-md-6">
                <h2 className="my-3">Registration</h2>
                <form onSubmit={SubmitHandel}   >
                    <input type="text" className="form-control" value={ValueInput.name} name="name" onChange={Changehandaler} placeholder="Name" />
                    <br />
                    <input type="email" className="form-control" value={ValueInput.email} name="email" onChange={Changehandaler} placeholder="E-mail" />
                    <br />
                    <input type="password" className="form-control" name="password" value={ValueInput.password} onChange={Changehandaler} placeholder="Password" />
                    <br />
                    <input type="password" className="p-2 form-control" name="cpassword" value={ValueInput.cpassword} onChange={Changehandaler} placeholder="Conform Password" />
                    <br />
                    <input type="submit" value="Submit Now" disabled={buttonDisbale} className="form-control btn btn-primary" />
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
                </form>
            </div>
            <div className="col-md-6">
                <h2 className="offset-2 my-3" >Contact Information </h2>
                <div className="d-inline-flex mt-3 offset-1">
                    <i style={weith} className=" mx-3   fas fa-envelope-open-text"></i>
                    <h5 className="text-break">krishnakk5944711@gmail.com</h5>
                </div>
                <br />
                <div className="d-inline-flex mt-4 offset-1">
                    <i style={weith} className=" mx-3 mt- fas fa-phone-square-alt"></i>
                    <h5>+91 8192908078</h5>
                </div>
            </div>
        </>
    )
}

export default Form

// firebase url
// https://krishu-da55c-default-rtdb.firebaseio.com/krishu.json