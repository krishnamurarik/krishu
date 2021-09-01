import React, {useState}  from 'react'

function Form() {
    const [ ValueInput , Setvalue] = useState( "")

    const  SubmitHandel = Event=>{
        Event.preventDefault();
        Setvalue(Event.target[0].value)

        }
      const weith = {
          fontSize : "30px",
          color : "orange"
      }
    return (
        <>
        <div className="col-md-6">
            <h2 className="my-3">Welcome  {ValueInput}  </h2>
        <form onSubmit={SubmitHandel}   >
            <input type="text" className="form-control"  placeholder="Name" />
            <br/>
            <input type="email" className="form-control" placeholder="E-mail" />
            <br/>
            <input type="number" className="form-control" placeholder=" Number " />
            <br/>
            <textarea  className="p-2 form-control" cols="72" rows="7" placeholder="Somthinge Write" />
            <br/>
            <input type="submit" value="Submit Now"   className="form-control btn btn-primary" />
        </form>
    </div>
    <div className="col-md-6">
        <h2 className="offset-2 my-3" >Contact Information </h2>
        <div className="d-inline-flex mt-3 offset-1">
             <i style={weith} className=" mx-3   fas fa-envelope-open-text"></i>
             <h5 className="text-break">krishnakk5944711@gmail.com</h5>
        </div>
        <br/>
        <div className="d-inline-flex mt-4 offset-1">
            <i style={weith} className=" mx-3 mt- fas fa-phone-square-alt"></i>
            <h5>+91 8192908078</h5>
        </div>
    </div>
    </>
    )
}

export default Form
