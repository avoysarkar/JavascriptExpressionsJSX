import React from "react";
import ReactDOM from "react-dom";

const fname = "Avoy";
const lname = "Sarkar";
const num = 429;

ReactDOM.render(
  <div>
    {/* Below show ES6 code  */}
    <h1>Hello {`${fname} ${lname}`}</h1>
    <p>My Roll Number was UGCS16{num}</p>
    <p>My Random number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
