import React, { useState, useEffect, useCallback } from 'react';

const Pomodoro: React.FC = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [fillerHeight, setFillerHeight] = useState(0);
  const [started, setStarted] = useState(false);
  const [position, setPosition] = useState({ x: window.innerWidth - 230, y: 50 }); // Start 10px from right and 50px from top
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const fillerIncrement = 90 / (minutes * 60);

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

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (dragging) {
      const { clientX, clientY } = e;
      const newX = clientX - offset.x;
      const newY = clientY - offset.y;

      // Ensure the new Y position is at least 20 pixels from the top
      setPosition({
        x: newX,
        y: newY < 20 ? 20 : newY,
      });
    }
  }, [dragging, offset]);

  const handleMouseUp = useCallback(() => {
    setDragging(false);
  }, []);

  useEffect(() => {
    if (dragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, handleMouseMove, handleMouseUp]);

  return (
    <div
      id="pomodoro-app"
      className="fixed z-10 w-[220px] cursor-move no-select shadow-md"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div
        className="border border-gray-800 rounded-sm w-[220px] mx-auto p-5 text-center bg-gray-800 cursor-move"
        onMouseDown={handleMouseDown}
      >
        <div className="text-white text-[20px] font-bold mx-auto border-4 border-white rounded-full shadow-sm shadow-white w-[100px] h-[100px] relative flex items-center justify-center overflow-hidden">
          <div className="z-10">
            <span id="minutes">{toDoubleDigit(minutes)}</span>
            <span>:</span>
            <span id="seconds">{toDoubleDigit(seconds)}</span>
          </div>
          <div
            className="absolute bottom-0 left-0 bg-[#d5def5] w-full"
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
