import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./Counter.js";
import BothCounter from "./Counter1.js";
import Multiply_value from "./Multiply_value.js";
import ShowArrayValues from "./ShowArrayValues.js";
import CheckArray from "./CheckArray.js";
import Timer from "./Timer.js";
import Navbar from "./Navbar.js";
import BmiCalculator from "./BmiCalculator";
import NutritionMeter from "./NutritionMeter";
import Currency from "./Currency";
import PasswordGenerator from "./PasswordGenerator";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Counter" element={<Counter />} />
          <Route path="/BothCounter" element={<BothCounter />} />
          <Route path="/Multiply_value" element={<Multiply_value />} />
          <Route path="/ShowArrayValues" element={<ShowArrayValues />} />
          <Route path="/CheckArray" element={<CheckArray />} />
          <Route path="/Timer" element={<Timer />} />
          <Route path="/BmiCalculator" element={<BmiCalculator />} />
          <Route path="/NutritionMeter" element={<NutritionMeter />} />
          <Route path="/PasswordGenerator" element={<PasswordGenerator />} />
          <Route path="/Currency" element={<Currency />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
