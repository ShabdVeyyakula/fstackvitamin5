import React, { useState, useEffect } from 'react';
import './NotHome.css';

const NotHome = () => {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Reset counter if it goes below 0
    if (count < 0) {
      setCount(0);
    }
    
    // Show message if count is greater than 5
    setShowMessage(count > 5);
  }, [count]);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="nothome-container">
      <h1>Not Home</h1>
      
      <div className="counter-container">
        <h2>Counter: {count}</h2>
        <div className="counter-buttons">
          <button onClick={handleIncrease}>Increase</button>
          <button onClick={handleDecrease}>Decrease</button>
        </div>
        
        <div className="counter-bar">
          <div 
            className="counter-progress" 
            style={{ width: `${count * 10}%` }}
          ></div>
        </div>
        
        {showMessage && (
          <div className="counter-message">
            You passed 5!
          </div>
        )}
      </div>
    </div>
  );
};

export default NotHome; 