import React, { useState } from "react";
import "./Count.css"; // Import external CSS file

function Count() {
  const [value, setValue] = useState(15);

  const addButton = () => {
    setValue(value + 1);
  };

  return (
    <div className="app">
      <h1 className="title">ADD value: {value}</h1>
      <button onClick={addButton} className="add-button">
        Add Counter
      </button>
    </div>
  );
}

export default Count;
