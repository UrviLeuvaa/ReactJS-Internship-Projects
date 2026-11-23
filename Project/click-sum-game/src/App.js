import React, { useState, useEffect } from 'react';
import './App.css';

const generateRandomValues = () => {
  return Array.from({ length: 9 }, () => Math.floor(Math.random() * 9) + 1);
};

function App() {
  const [values, setValues] = useState(generateRandomValues());
  const [clickedIndexes, setClickedIndexes] = useState([]);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState('');

  const handleClick = (index) => {
    if (clickedIndexes.includes(index) || clickedIndexes.length >= 3) return;

    const newClicked = [...clickedIndexes, index];
    const newTotal = total + values[index];

    setClickedIndexes(newClicked);
    setTotal(newTotal);

    if (newClicked.length === 3) {
      setStatus(newTotal > 10 ? '🎉 You Win!' : '😢 You Lose!');
    }
  };

  const resetGame = () => {
    setValues(generateRandomValues());
    setClickedIndexes([]);
    setTotal(0);
    setStatus('');
  };

  return (
    <div className="app">
      <h1>🎲 Click Sum Game</h1>
      <p>Click any 3 buttons. If the total > 10, you win!</p>

      <div className="grid">
        {values.map((val, index) => (
          <button
            key={index}
            className={`cell ${clickedIndexes.includes(index) ? 'clicked' : ''}`}
            onClick={() => handleClick(index)}
            disabled={clickedIndexes.includes(index) || clickedIndexes.length >= 3}
          >
            {clickedIndexes.includes(index) ? val : "?"}
          </button>
        ))}
      </div>

      <div className="info">
        <p>Total: {total}</p>
        {status && <h2>{status}</h2>}
        <button className="reset-btn" onClick={resetGame}>🔁 Reset Game</button>
      </div>
    </div>
  );
}

export default App;
