import React, { useState, useEffect, useRef } from 'react';
import './style.css';

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const timerRef = useRef(null);

  function start() {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setSeconds((prevSec) => prevSec + 1);
      }, 1000);
    }
  }

  function stop() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function reset() {
    stop();
    setSeconds(0);
  }

  useEffect(() => {
    if (seconds % 20 === 0) {
      setMinutes((prevMin) => prevMin + 1);
      setSeconds(0);
    }
  }, [seconds]);
  return (
    <div>
      <h1>
        {minutes}:{seconds}
      </h1>
      <button onClick={() => start()}>start</button>
      <button onClick={() => stop()}>stop</button>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
}
