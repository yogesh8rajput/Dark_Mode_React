import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Check if dark mode preference is saved in localStorage or set default to light
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' || window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  // Toggle dark mode state
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Store dark mode preference in localStorage
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
      {/* Dark Mode Toggle Button (Sun/Moon) */}
      <button className={`theme-toggle ${isDarkMode ? 'moon' : 'sun'}`} onClick={toggleDarkMode}>
        {isDarkMode ? '🌙' : '☀'}
      </button>

      <div className="content">
        <h1 className='text-4xl'>React Dark Mode Example</h1>
        <p>Click the button to toggle between light and dark modes.</p>
      </div>

      <h5 className='text-9xl'>helllo i am h5</h5>
    </div>
  );
}

export default App;
