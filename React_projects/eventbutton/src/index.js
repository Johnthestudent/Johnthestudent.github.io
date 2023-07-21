import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";

function EventforDate()
{
  return(
    <html>
      <body>

      <button onClick={()=>document.getElementById("demo").innerHTML=Date()}>The time is?</button>

      <p id="demo"></p>

      </body>
    </html>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<EventforDate />);
