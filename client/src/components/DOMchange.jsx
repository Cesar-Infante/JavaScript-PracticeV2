import React, { useState } from "react";
import "../styles/DOMchange.css";

function DOMchange() {
  const [isSimple, setIsSimple] = useState(true);
  return (
    <div>
      <p className={isSimple ? "newColor" : "leaveSimple"}>
        JavaScript Exercises - modify the style of the paragraph text through
        javascript code.
      </p>
      <div>
        <button onClick={() => setIsSimple(!isSimple)} className="DOMBtn">
          Style
        </button>
      </div>
    </div>
  );
}

export default DOMchange;
