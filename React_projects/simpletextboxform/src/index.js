import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";

function MyForm() {
  //usestate hook to grab the component
  const [name, setName] = useState("");

  //handle the given input
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  //form for giving a state
  return (
    <form onSubmit={handleSubmit}>
      <label for="firstname">
        Enter your name:
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" id="sender" />
    </form>
  );
}

//creating the element from the MyForm component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyForm />);
