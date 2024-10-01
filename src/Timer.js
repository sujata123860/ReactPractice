import React, { useEffect, useState } from "react";
function Timer() {
  const [seconds, setSeconds] = useState();
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevsecond) => prevsecond + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="app">
      <p>Timer: {seconds} seconds</p>
    </div>
  );
}
export default Timer;
