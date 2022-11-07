import React from 'react'

function DOMchange() {
  return (
    <div>
      <p id="text">
        JavaScript Exercises - modify the style of the paragraph text through
        javascript code.
      </p>
      <div>
        <button id="jsstyle" onclick="js_style()">
          Style
        </button>
      </div>
    </div>
  );
}

export default DOMchange