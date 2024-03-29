import React from 'react';
import ReactDOM from 'react-dom/client';

function Animator()
{
  return(
    <html>
      <head>
      <style>
      {`
        div {
          width: 100px;
          height: 100px;
          background-color: red;
          animation-name: example;
          animation-duration: 4s;
        }

        @keyframes example {
          0%   {background-color: red;}
          25%  {background-color: yellow;}
          50%  {background-color: blue;}
          100% {background-color: green;}
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