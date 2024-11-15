import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0); 

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prev) => prev - 1); 
      }, 1000);
    } else if (remainingTime === 0) { 
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, remainingTime]);

  const handleStart = () => {
    if (time > 0) {
      setRemainingTime(time);
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setRemainingTime(0);
    setTime(0);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-900">
        <h1 className="text-4xl font-extrabold uppercase mb-6 text-white hover:underline">Countdown Timer</h1>
     <input type="number" className="border-2 border-grey-400 bg-transparent p-3 mb-6 text-white text-xl rounded"
     placeholder="Enter time in seconds"
     value={time > 0 ? time:""}
     onChange={(e) => setTime(Number(e.target.value))} />
     <div className="font-semibold text-teal-400 py-8 mb-2">{remainingTime} seconds remaining </div>
     <div>
        <button
        onClick={handleStart}
        className="text-white px-8 py-4 rounded-lg font-normal bg-red-600 hover:bg-red-500">Start
        </button>
        <button
        onClick={handlePause}
        className="text-white px-8 py-4 rounded-lg font-normal bg-blue-600 hover:bg-blue-500">Pause
        </button>
        <button
        onClick={handleReset}
        className="text-white px-8 py-4 rounded-lg font-normal bg-green-600 hover:bg-green-500">Reset
        </button>
     </div>
    </div>
  );
};

export default CountdownTimer;
