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

  // Mapping of numbers to custom labels
  const bingoLabels = {
    1: "ICS Founder's Son",
    2: "The Bicolana Computing Mom",
    3: "Has 8 cats",
    4: "Has a green pet parrot",
    5: "Enjoys freediving",
    6: "#DataBAE",
    7: "Environmental Advocate and loves chicken",
    8: "Enjoys baking",
    9: "Mermaid",
    10: "Enjoys watching UAAP live",
    11: "Hindi mapakali pag walang gulay ang pagkain",
    12: "The K-pop Stan",
    13: "Okay ka",
    14: "The history enthusiast",
    15: "HAHAHAHA",
    16: "2022 Jowable Award winner",
    17: "ICS Oppa",
    18: "Has a blog named Uptime",
    19: "IGN: bladar",
    20: "One Grande please",
    21: "Loves to cook",
    22: "Rides a bike to campus",
    23: "Star wars nerd",
    24: "Mr D.J.",
    25: "Proud member of Google Dev Group PH",
    26: "The Parallel Computing Expert",
    27: "(A'+R')'MGIE",
    28: "The Songer",
    29: "Lights, Camera, Action!",
    30: "Luv Instructor",
    31: "Student: Nonchalant",
    32: "Student: Taga-Malayo XD",
    33: "Student: Non BSCS Student",
    34: "Student: Anak ng UPLB Alum", 
    35: "Student: Graduate student"

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
