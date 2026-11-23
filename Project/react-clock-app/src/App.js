import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <div className="glass-card fade-in">
        <h1 className="title">🌐 Live Clock</h1>
        <div className="clock">
          <p className="time glow">{time.toLocaleTimeString()}</p>
          <p className="date">{time.toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
