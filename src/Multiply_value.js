import React, { useState } from "react";
import "./Count.css";
function MultipleValue() {
  const [value, setValue] = useState(1);
  const [multiply, setMultiply] = useState(1);
  //let totalVal = value * 5;
  const multiButton = () => {
    setValue(value + 1);
    setMultiply(value * 5);
  };
  return (
    <div className="app">
      <h1 className="title">multiply value: {value}</h1>
      <button onClick={multiButton} className="add-button">
        multiply value 5
      </button>
      <h1 className="title">Total: {multiply}</h1>
    </div>
  );
}

export default MultipleValue;
