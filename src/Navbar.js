import React from "react";
import "./Navbar.css"; // Import external CSS file

function Navbar() {
  return (
    <>
      <ul className="top-link">
        <li>
          <a href="/Counter">Counter</a>
        </li>
        <li>
          <a href="/Multiply_value">Multiply Value</a>
        </li>
        <li>
          <a href="/ShowArrayValues">Show Array Values</a>
        </li>
        <li>
          <a href="/BothCounter">Both Counter</a>
        </li>
        <li>
          <a href="/CheckArray">CheckArray</a>
        </li>
        <li>
          <a href="/Timer">Timer</a>
        </li>
        <li>
          <a href="/BmiCalculator">BmiCalculator</a>
        </li>
        <li>
          <a href="/NutritionMeter">NutritionMeter</a>
        </li>
        <li>
          <a href="/PasswordGenerator">Password Generator</a>
        </li>
        <li>
          <a href="/Currency">Currency</a>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
