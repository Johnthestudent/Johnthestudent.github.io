import React from 'react';
import ReactDOM from 'react-dom/client';

function Animator(){
  return(

    <html>
      <head>
      <style>
      {` 
        div {
          width: 100px;
          height: 100px;
          background-color: red;
          position: relative;
          animation-name: example;
          animation-duration: 4s;
          animation-direction: reverse;  
        }

        @keyframes example {
          0%   {background-color:red; left:0px; top:0px;}
          25%  {background-color:yellow; left:200px; top:0px;}
          50%  {background-color:blue; left:200px; top:200px;}
          75%  {background-color:green; left:0px; top:200px;}
          100% {background-color:red; left:0px; top:0px;}
        }
      `}
      </style>
      </head>
      <body>

      <p><b>Note:</b> This example does not work in Internet Explorer 9 and earlier versions.</p>

      <div></div>

      </body>
    </html>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Animator />);