import React from 'react';

const GameControls = ({ onReset }) => {
  return (
    <div className="game-controls">
      <button className="control-button" onClick={onReset}>
        New Game
      </button>
    </div>
  );
};

export default GameControls;
