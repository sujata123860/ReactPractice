import { useEffect, useState } from "react";
import Axios from "axios";
import Dropdown from "react-dropdown";
import { HiSwitchHorizontal } from "react-icons/hi";
import "react-dropdown/style.css";
import "./currency.css";

function App() {
  const [info, setInfo] = useState({});
  const [input, setInput] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [to, setTo] = useState("INR");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);

  // Fetch latest exchange rates
  useEffect(() => {
    const fetchCurrencyData = async () => {
      const url = `https://open.er-api.com/v6/latest/${fromCurrency}`;
      console.log(`Fetching data from: ${url}`); // Log the URL
      try {
        const response = await Axios.get(url);
        setInfo(response.data.rates); // Set currency rates
        setOptions(Object.keys(response.data.rates)); // Update options for dropdown
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    fetchCurrencyData();
  }, [fromCurrency]);

  // Function to convert currency
  function convert() {
    const rate = info[to];
    if (input && rate) {
      setOutput(input * rate);
    } else {
      setOutput(0); // Reset output if input or rate is not valid
    }
  }

  // Function to switch between currencies
  function flip() {
    const temp = fromCurrency;
    setFromCurrency(to);
    setTo(temp);
  }

  return (
    <div className="App">
      <div className="heading">
        <h1>Currency Converter</h1>
      </div>
      <div className="container">
        <div className="left">
          <h3>Amount</h3>
          <input
            type="number"
            placeholder="Enter the amount"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="middle">
          <h3>From</h3>
          <Dropdown
            options={options}
            onChange={(e) => setFromCurrency(e.value)}
            value={fromCurrency}
            placeholder="From"
          />
        </div>
        <div className="switch">
          <HiSwitchHorizontal size="30px" onClick={flip} />
        </div>
        <div className="right">
          <h3>To</h3>
          <Dropdown
            options={options}
            onChange={(e) => setTo(e.value)}
            value={to}
            placeholder="To"
          />
        </div>
      </div>
      <div className="result">
        <button className="convertbtn" onClick={convert}>
          Convert
        </button>
        <h2>Converted Amount:</h2>
        <p>
          {input + " " + fromCurrency + " = " + output.toFixed(2) + " " + to}
        </p>
      </div>
    </div>
  );
}

export default App;
