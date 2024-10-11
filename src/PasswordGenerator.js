import React, { useState } from "react";
import "./Count.css";

function PasswordGenerator() {
  const [PasswordGenerator, setPassword] = useState("");
  const [Copyied, setCopyied] = useState(false);
  const [sliderValue, setSliderValue] = useState(10);
  const passwordgenerate = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
    let pass = "";
    for (let index = 0; index < sliderValue; index++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pass);
    setCopyied(false);
  };
  const copy = () => {
    navigator.clipboard.writeText(PasswordGenerator);
    setCopyied(true);

    setTimeout(() => {
      setCopyied(false);
    }, 3000);
  };

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value); // Update slider value
  };
  return (
    <div className="app">
      <div className="title">Password Generator</div>
      <div className="row">
        <div className="col-md-12">
          <input
            type="text"
            name="password"
            value={PasswordGenerator || ""}
            readOnly
          />
          <button
            className="copybtn"
            onClick={copy}
            disabled={!PasswordGenerator}
          >
            Copy
          </button>
          {Copyied && <p>Password copied to clipboard!</p>}
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <input
            type="range"
            min="1"
            max="100"
            value={sliderValue}
            id="myRange"
            onChange={handleSliderChange} // Set the onChange handler
          />
          <p>
            Password Length: <span>{sliderValue}</span>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <button onClick={passwordgenerate}>Password Generator</button>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
