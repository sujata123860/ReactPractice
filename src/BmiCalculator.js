import React, { useState } from "react";
import "./BmiCalculator.css";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculate = () => {
    if (!weight || !height) {
      console.log("Please enter both weight and height!");
      return;
    }
    const heightInMeter = parseFloat(height);
    const bmiValue = (
      parseFloat(weight) /
      (heightInMeter * heightInMeter)
    ).toFixed(2);
    console.log(bmiValue);
    setBmi(bmiValue);
    let bmiStatus = "";
    if (bmiValue < 18.5) {
      bmiStatus = "Underweight";
    } else if (bmiValue < 24.9) {
      bmiStatus = "Normal weight";
    } else if (bmiValue < 29.9) {
      bmiStatus = "Overweight";
    } else {
      bmiStatus = "Obesity";
    }
    setStatus(bmiStatus);
  };
  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <div className="input-group">
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height"
          />
        </label>
      </div>
      <button onClick={calculate}>Calculate</button>
      {bmi && (
        <div className="result">
          <h3>Your BMI: {bmi}</h3>
          <h3>Status: {status}</h3>
        </div>
      )}
    </div>
  );
};
export default BmiCalculator;
