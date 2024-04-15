import React, { useState } from 'react';
import './App.css';
import BImage from './assets/B.png';
import IImage from './assets/I.png';
import NImage from './assets/N.png';
import GImage from './assets/G.png';
import OImage from './assets/O.png';

function App() {
  // Function to generate a random number between 1 and 75 (inclusive)
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 35) + 1;
  };

  // Generate a new set of Bingo numbers (4x4 grid)
  const generateBingoCard = () => {
    const numbers = [];
    // Generate 16 unique random numbers (1-35) for the Bingo card (4x4 grid)
    while (numbers.length < 16) {
      const randomNumber = generateRandomNumber();
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  };

  const [bingoNumbers, setBingoNumbers] = useState(generateBingoCard());

  // Handle randomize button click
  const handleRandomizeClick = () => {
    setBingoNumbers(generateBingoCard());
  };

  // Render the Bingo card grid (4x4)
  const renderBingoCard = () => {
    return (
      <div className="bingo-card">
        {bingoNumbers.map((number, index) => (
          <div key={index} className="bingo-cell">
            {/* Display the number or image based on the Bingo number */}
            {number}
        </div>
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <ul className='bingo-header'>
          <li><img src={BImage}/></li>
          <li><img src={IImage}/></li>
          <li><img src={NImage}/></li>
          <li><img src={GImage}/></li>
          <li><img src={OImage}/></li>
        </ul>
        <div className="grid-container">
          {renderBingoCard()}
        </div>
        <div>
          <p className="footer"><br />Refresh page to randomize</p>
          <p className="footer">&copy; ICS Socials Committee. 2024</p>
        </div>
      </header>
      
    </div>
  );
}

export default App;
