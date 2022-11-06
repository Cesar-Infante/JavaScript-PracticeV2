import React from "react";
import "../styles/PrintContent.css"

/* 2. Write a JavaScript program to print
      the contents of the current window.
*/

const PrintContent = () => {
  return (
    <div className="print">
      <p>Print the contents of this page</p>
      <button className="printBtn" onClick={window.print}>PRINT</button>
    </div>
  );
};

export default PrintContent;
