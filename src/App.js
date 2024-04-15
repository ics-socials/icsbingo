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
    return Math.floor(Math.random() * 75) + 1;
  };

  // Generate a new set of Bingo numbers
  const generateBingoCard = () => {
    const numbers = [];
    // Generate 24 unique random numbers (1-75) for the Bingo card
    while (numbers.length < 24) {
      const randomNumber = generateRandomNumber();
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    // Add a 'FREE' space in the center of the card (at index 12)
    numbers.splice(12, 0, 'FREE');
    return numbers;
  };

  const [bingoNumbers, setBingoNumbers] = useState(generateBingoCard());

  // Handle randomize button click
  const handleRandomizeClick = () => {
    setBingoNumbers(generateBingoCard());
  };

  // Render the Bingo card grid
  const renderBingoCard = () => {
    return (
      <div className="bingo-card">
        {bingoNumbers.map((number, index) => (
          <div key={index} className="bingo-cell">
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
        <button className="randomize-button" onClick={handleRandomizeClick}>
          Randomize Numbers
        </button>
      </header>
    </div>
  );
}

export default App;
