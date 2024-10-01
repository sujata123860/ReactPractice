import React, { useState } from "react";
import "./Count.css";
function CountQueuingStrategy() {
  const [value, setValue] = useState(1);
  const addButton = () => {
    setValue(value + 1);
  };
  const subtractButton = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  return (
    <div className="app">
      <h1 className="title">ADD value: {value}</h1>
      <button onClick={addButton} className="add-button">
        Add button
      </button>
      <button onClick={subtractButton} className="remove-button">
        Remove button
      </button>
    </div>
  );
}
export default CountQueuingStrategy;
