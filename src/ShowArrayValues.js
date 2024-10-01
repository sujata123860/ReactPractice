import React, { useState } from "react";
import "./Count.css";
const ShowArrayValues = () => {
  const arr = ["Neha", "Priti", "Astha", "Swati"];
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    if (index < arr.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0); // Resets to the first element after the last one
    }
  };

  return (
    <div className="app">
      <h1 className="title">{arr[index]}</h1>
      <button onClick={handleClick} className="add-button">
        Next
      </button>
    </div>
  );
};

export default ShowArrayValues;
