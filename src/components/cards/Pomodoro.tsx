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
    <div id="pomodoro-app" className='absolute top-0 right-0 z-10'>
      <div className="border border-gray-800 rounded-sm w-[200px] mx-auto p-5 text-center bg-gray-800">
        <div className="text-white text-[20px] mx-auto border-4 border-white rounded-full w-25 h-25 relative overflow-hidden">
          <div className="relative top-20 z-10">
            <span id="minutes">{toDoubleDigit(minutes)}</span>
            <span>:</span>
            <span id="seconds">{toDoubleDigit(seconds)}</span>
          </div>
          <div
            className="absolute bottom-0 left-0 bg-green-100 w-full text-[13px]"
            style={{ height: `${fillerHeight}px` }}
          ></div>
        </div>
        <div className="mt-5">
          <button
            className="bg-[] text-white px-2 py-1 w-[70px] mx-auto rounded-full text-[11px]"
            onClick={() => startTimer(25)}
          >
            Start
          </button>
          <button
            className="bg-green-400 text-white p-2 w-18 mx-auto rounded-full text-[11px]"
            onClick={() => startTimer(5)}
          >
            Short Break
          </button>
          <button
            className="bg-green-700 text-white p-2 w-18 mx-auto rounded-full text-[11px]"
            onClick={() => startTimer(15)}
          >
            Long Break
          </button>
          <button
            className="bg-red-500 text-white p-2 w-18 mx-auto rounded-full text-[11px]"
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
