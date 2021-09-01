import React, { useState } from "react";
import Home from "../Home";

function About() {
  var [Value, setValue] = useState({
    fname: "krishna",
    lname: "murari",
    age: 24,
    class: 12,
  });
  return (
    <div>
      <Home />
      <h1>my first name {Value.fname} </h1>
      <button
        onClick={() => {
          setValue({ fname: "jo bhi h " });
        }}
      >
        Update Value{" "}
      </button>
    </div>
  );
}

export default About;
