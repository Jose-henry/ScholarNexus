import React, { useState, useEffect, useCallback } from 'react';

const Pomodoro: React.FC = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [fillerHeight, setFillerHeight] = useState(0);
  const [started, setStarted] = useState(false);
  const [position, setPosition] = useState({ x: window.innerWidth - 260, y: 10 }); // Adjust initial x and y position here
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

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

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    const { clientX, clientY } = e;
    setOffset({ x: clientX - position.x, y: clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragging) {
      const { clientX, clientY } = e;
      setPosition({
        x: clientX - offset.x,
        y: clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      id="pomodoro-app"
      style={{
        position: 'fixed',
        right: `${position.x}px`, // Positioning from the right side of the screen
        top: `${position.y}px`,
        zIndex: 10,
        cursor: dragging ? 'grabbing' : 'grab',
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className="border border-gray-800 rounded-sm w-[220px] mx-auto p-5 text-center bg-gray-800"
        onMouseDown={handleMouseDown}
      >
        <div className="text-white text-[20px] font-bold mx-auto border-4 border-white rounded-full shadow-sm shadow-white w-[100px] h-[100px] relative flex items-center justify-center overflow-hidden">
          <div className="z-10">
            <span id="minutes">{toDoubleDigit(minutes)}</span>
            <span>:</span>
            <span id="seconds">{toDoubleDigit(seconds)}</span>
          </div>
          <div
            className="absolute bottom-0 left-0 bg-green-100 w-full"
            style={{ height: `${fillerHeight}px` }}
          ></div>
        </div>
        <div className="mt-5 w-[180px] grid grid-cols-2 gap-2">
          <button
            className="bg-blue-400 text-white px-2 py-1 w-full font-bold mx-auto rounded-full text-[11px]"
            onClick={() => startTimer(25)}
          >
            Start
          </button>
          <button
            className="bg-red-500 text-white w-full font-bold px-2 py-1 mx-auto rounded-full text-[11px]"
            onClick={stopTimer}
          >
            Stop
          </button>
          <button
            className="bg-green-400 text-white w-full font-bold px-2 py-1 mx-auto rounded-full text-[11px]"
            onClick={() => startTimer(5)}
          >
            Short Break
          </button>
          <button
            className="bg-green-700 text-white font-bold w-full px-2 py-1 mx-auto rounded-full text-[11px]"
            onClick={() => startTimer(15)}
          >
            Long Break
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
