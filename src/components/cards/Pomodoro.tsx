import React, { useState, useEffect, useCallback } from 'react';

const Pomodoro: React.FC = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [fillerHeight, setFillerHeight] = useState(0);
  const [started, setStarted] = useState(false);

  const fillerIncrement = 200 / (minutes * 60);

  const startTimer = (mins: number) => {
    setMinutes(mins);
    setSeconds(0);
    setStarted(true);
    setFillerHeight(0);
  };

  const stopTimer = () => {
    setMinutes(25);
    setSeconds(0);
    setStarted(false);
    setFillerHeight(0);
  };

  const updateDom = useCallback(() => {
    if (started) {
      setFillerHeight((prevHeight) => prevHeight + fillerIncrement);
    }
  }, [started, fillerIncrement]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!started) return;

      if (seconds === 0) {
        if (minutes === 0) {
          stopTimer();
        } else {
          setSeconds(59);
          setMinutes((prevMinutes) => prevMinutes - 1);
        }
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }

      updateDom();
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds, started, updateDom]);

  const toDoubleDigit = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  return (
    <div id="pomodoro-app">
      <div className="border border-gray-800 rounded-2xl w-96 mx-auto p-5 text-center bg-gray-800">
        <div className="text-red-500 text-6xl mx-auto border-4 border-red-500 rounded-full w-48 h-48 relative overflow-hidden">
          <div className="relative top-20 z-10">
            <span id="minutes">{toDoubleDigit(minutes)}</span>
            <span>:</span>
            <span id="seconds">{toDoubleDigit(seconds)}</span>
          </div>
          <div
            className="absolute bottom-0 left-0 bg-green-100 w-full"
            style={{ height: `${fillerHeight}px` }}
          ></div>
        </div>
        <div className="mt-5">
          <button
            className="bg-blue-400 text-white py-2 px-4 w-24 mx-auto rounded-full mt-2"
            onClick={() => startTimer(25)}
          >
            Work
          </button>
          <button
            className="bg-green-400 text-white py-2 px-4 w-24 mx-auto rounded-full mt-2"
            onClick={() => startTimer(5)}
          >
            Short Break
          </button>
          <button
            className="bg-green-700 text-white py-2 px-4 w-24 mx-auto rounded-full mt-2"
            onClick={() => startTimer(15)}
          >
            Long Break
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 w-24 mx-auto rounded-full mt-2"
            onClick={stopTimer}
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
