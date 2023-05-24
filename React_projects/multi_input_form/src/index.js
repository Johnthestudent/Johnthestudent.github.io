import React from "react";

import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function MyForm() {
  //state
  const [inputs, setInputs] = useState({});

  //handle the state change
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  //formhandler
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  //form element
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" id="Submit" />
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyForm />);

/*
Click F12 and navigate to the "Console view"
to see the result when you submit the form.
*/
