import React, { useState } from 'react';
import './App.css';
import BImage from './assets/B.png';
import IImage from './assets/I.png';
import NImage from './assets/N.png';
import GImage from './assets/G.png';
import OImage from './assets/O.png';
import confetti from './assets/confetti.png';

function App() {
  const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  // Generate a 16-character control number
  const controlNumber = generateRandomString(16);

  // Function to generate a random number between 1 and 75 (inclusive)
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 37) + 1;
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

  // Mapping of numbers to custom labels
  const bingoLabels = {
    1: "EliZita",
    2: "OOP Mom",
    3: "Catdad skater",
    4: "The OIC",
    5: "Environmental advocate and loves chicken",
    6: "The KPOP Stan",
    7: "T.S.",
    8: "A'TIN",
    9: "AI Technique: Domain Expansion",
    10: "ICS Biker Head",
    11: "Ping (Pong) Expert",
    12: "IGN: bladar",
    13: "NuNull",
    14: "Digital Agriculturist",
    15: "Come Closer",
    16: "Assembly Mom",
    17: "Pinoy Film Kontrabida",
    18: "I hate those <insert your colonially-influenced expletive here> choices above because this makes me think. I hate analytical reasoning. I hate thinking in general. Why can't we just love each other, huh? Well, I am sure that if I choose this option, I will be wrong. So, what have I got to do? Ahh... Langit, lupa, impyerno... imp, imp, impyerno. Nanay kong maganda, pwede pang ibenta. Ate mo'y masungit, dahil siya ay pangit. Patay! buhay! Alis!",
    19: "(A'+R')'MGIE",
    20: "The Boston Tea Party",
    21: "Recursively Enumerable Professor",
    22: "OOTD Everyday",
    23: "Papers Please",
    24: "FatherFigure02",
    25: "Baby Powder",
    26: "Pokemon #445 or #319",
    27: "Joker Laugh",
    28: "Steam Deck + GPD",
    29: "ICS Next Top Model",
    30: "Mudkip Enjoyer",
    31: "Origami Swan",
    32: "Find a Student: Nonchalant",
    33: "Find a Student: Taga-Malayo XD",
    34: "Find a Student: Non BSCS Student",
    35: "Find a Student: Anak ng UPLB Alum", 
    36: "Find a Student: Graduate student",
    37: "Find a Student: BS ORG!",
    38: "Sardine Runner",
    39: "May Sariling Parking sa OCS",
    // Add more labels as needed
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
          <div key={index} className="bingo-cell"  style={{ maxWidth: '100%', overflow: 'hidden', wordBreak: 'break-all' }}>
            {/* Display the label corresponding to the Bingo number */}
            {bingoLabels[number]}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      <div className="App-header">
        <img className="confettiA" src={confetti} alt="Confetti" />
        <ul className='bingo-header'>
          <li><img src={BImage} alt="B" /></li>
          <li><img src={IImage} alt="I" /></li>
          <li><img src={NImage} alt="N" /></li>
          <li><img src={GImage} alt="G" /></li>
          <li><img src={OImage} alt="O" /></li>
        </ul>
        <div className="grid-container">
          {renderBingoCard()}
        </div>
        <div>
          <p className="footer"><br />Control Number: {controlNumber}<br />Refresh page to randomize</p>
          <p className="footer">&copy; Institute of Computer Science. 2024</p>
        </div>
        <div>
          <img className="confettiB" src={confetti} alt="Confetti" />
        </div>
      </div>
    </div>
  );
}

export default App;
