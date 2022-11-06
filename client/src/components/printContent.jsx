import React from "react";

/* 2. Write a JavaScript program to print
      the contents of the current window.
*/

const PrintContent = () => {
  return (
    <div>
      <p>Print the contents of this page</p>
      <button onClick={window.print}>Hello World</button>
    </div>
  );
};

export default PrintContent;
