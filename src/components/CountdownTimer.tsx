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
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-black via-purple-900 to-gray-900 h-screen">
        <h1 className=" uppercase mb-6 hover:underline
        text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-5xl font-bold">Countdown Timer</h1>
     <input type="number" className="border-2 border-grey-400 bg-transparent p-3 mb-6 text-white text-xl rounded"
     placeholder="Enter time in seconds"
     value={time > 0 ? time:""}
     onChange={(e) => setTime(Number(e.target.value))} />
     <div className="font-semibold text-teal-400 py-8 mb-2">{remainingTime} seconds remaining </div>
     <div>
        <button
        onClick={handleStart}
        className="text-white px-8 py-4 rounded-lg font-normal bg-blue-500 hover:bg-blue-600">Start
        </button>
        <button
        onClick={handlePause}
        className="text-white px-8 py-4 rounded-lg font-normal bg-orange-500 hover:bg-orange-600">Pause
        </button>
        <button
        onClick={handleReset}
        className="text-white px-8 py-4 rounded-lg font-normal bg-green-500 hover:bg-green-600">Reset
        </button>
     </div>
    </div>
  );
};

export default CountdownTimer;
