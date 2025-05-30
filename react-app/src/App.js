import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Initialize dark mode state from localStorage or default to false
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  // Toggle the dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Persist dark mode preference in localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className="App">
      <h1>React Dark and Light  Mode Example</h1>
      <h1>Hello EveryOne welcome to DarkMode</h1>
      <button onClick={toggleDarkMode}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default App;
