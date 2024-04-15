import React, { useState } from 'react';
import './App.css';
import BImage from './assets/B.png';
import IImage from './assets/I.png';
import NImage from './assets/N.png';
import GImage from './assets/G.png';
import OImage from './assets/O.png';
import confetti from './assets/confetti.png';

function App() {
  // Function to generate a random number between 1 and 75 (inclusive)
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 36) + 1;
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
    4: "Sardine Runner",
    5: "#DataBAE",
    6: "Environmental Advocate and loves chicken",
    7: "Enjoys watching UAAP live",
    8: "The K-pop Stan",
    9: "Okay ka",
    10: "The history enthusiast",
    11: "HAHAHAHA",
    12: "One half crosswise cutie",
    13: "ICS Oppa",
    14: "ICS Cybertito",
    15: "IGN: bladar",
    16: "NuNull",
    17: "“Digital Agriculture”",
    18: "Loves to cook",
    19: "Come Closer",
    20: "Star wars nerd",
    21: "Mr D.J.",
    22: "“Care Bear Awardee 2023”",
    23: "The Parallel Computing Expert",
    24: "(A'+R')'MGIE",
    25: "The Twirl-er",
    26: "Recursively Enumerable Professor",
    27: "“OOTD Everyday”",
    28: "“Filipina Mother of NLP”",
    29: "“Cutie Summa Cum Lodi”",
    30: "“FatherFigure02”",
    31: "“Baby Powder”",
    32: "Find a Student: Nonchalant",
    33: "Find a Student: Taga-Malayo XD",
    34: "Find a Student: Non BSCS Student",
    35: "Find a Student: Anak ng UPLB Alum", 
    36: "Find a Student: Graduate student",
    37: "Find a Student: BS ORG!"
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
          <div key={index} className="bingo-cell">
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
          <p className="footer"><br />Refresh page to randomize</p>
          <p className="footer">&copy; ICS Socials Committee. 2024</p>
        </div>
        <div>
          <img className="confettiB" src={confetti} alt="Confetti" />
        </div>
      </div>
    </div>
  );
}

export default App;
