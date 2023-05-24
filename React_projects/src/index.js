import React from "react";
import ReactDom from "react-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

function Page() {
  return (
    <div>
      <h1>Welcome</h1>
      <h3>This is a base page of an oversimple React app</h3>
      <h3>In order to try it out, do these steps:</h3>
      <ol>
        <li>Download the repo</li>
        <li>Extract the downloaded folder</li>
        <li>Open it with VS Code</li>
        <li>Open a new terminal in VS Code</li>
        <li>Run npm install command</li>
        <li>Run npm start command</li>
        <li>
          <b>Localhost:3000</b> will start on your browser
        </li>
      </ol>
      <p>
        There are folders in the extracted folder, each of them are a React app,
        implementing something simple.
      </p>
      <p>
        Do the same steps on them like for the base one, but only the steps
        starting from the 3rd one.
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
