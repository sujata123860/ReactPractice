import React, { useState } from "react";
import "./Count.css";
function ShowArrayValuescheck() {
  const arr = ["Anamika", "Monika", "Ajay"];
  const [arrValue, SetarrValue] = useState(0);
  const nextButton = () => {
    if (arrValue < arr.length - 1) {
      SetarrValue(arrValue + 1);
    } else {
      SetarrValue(0);
    }
  };
  return (
    <div className="app">
      <h1 className="title">{arr[arrValue]}</h1>
      <button onClick={nextButton} className="add-button">
        Next
      </button>
    </div>
  );
}

export default ShowArrayValuescheck;
