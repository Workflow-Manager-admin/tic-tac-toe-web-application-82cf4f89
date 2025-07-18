import React from 'react';

const GameBoard = ({ squares, onSquareClick }) => {
  return (
    <div className="game-board">
      {squares.map((square, index) => (
        <button
          key={index}
          className="square"
          onClick={() => onSquareClick(index)}
          disabled={square !== null}
        >
          {square}
        </button>
      ))}
    </div>
  );
};

export default GameBoard;
