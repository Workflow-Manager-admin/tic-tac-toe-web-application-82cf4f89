import React, { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import GameStatus from './components/GameStatus';
import GameControls from './components/GameControls';

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(square => square !== null);

  const handleSquareClick = (index) => {
    if (winner || squares[index]) return;

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="App">
      <div className="game-container">
        <h1 className="game-title">Tic Tac Toe</h1>
        <GameStatus 
          winner={winner}
          isXNext={isXNext}
          isDraw={isDraw}
        />
        <GameBoard 
          squares={squares}
          onSquareClick={handleSquareClick}
        />
        <GameControls onReset={handleReset} />
      </div>
    </div>
  );
}

export default App;
