import React, { Component } from "react";
import img from "../images/discuss.png";

export default class Bloges extends Component {
  constructor(props) {
    super(props);
    var dd = new Date();
    this.state = {
      year: dd.getFullYear(),
      date: dd.getDate(),
      month: dd.getMonth() + 1,
      minute: dd.getMinutes(),
      hourse: dd.getHours(),
    };
  }
  render() {
    return (
      <div className="col-md-4 pt-4 m-auto col-sm-6">
        <div className="card shadow h-100 w-100 text-center text-capitalize ">
          <img
            src={this.props.img}
            alt="image"
            className="rounded img-fluid card-img"
          />
          <div className="card-body">
            <h5>
              {" "}
              <a href="" className="link display-6">
                Wab Dev{" "}
              </a>{" "}
              : {this.state.month} / {this.state.date} / {this.state.year} -{" "}
              {this.state.hourse} : {this.state.minute}{" "}
            </h5>
            <hr />
            <h3 className="font-weight-bold">{this.props.hdn} </h3>
            <h3 className="font-weight-bold">({this.props.hdh})</h3>
            <br />
            <p className="lead m-0 p-0"> {this.props.pera}</p>
            <br />
            <p>
              {" "}
              by..{" "}
              <a href="" className="link ">
                {" "}
                shagun garg{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
