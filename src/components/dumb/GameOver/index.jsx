import React from 'react';
import './index.css';
import { Button } from 'semantic-ui-react';

const GameOver = (props) => {
  return (
    <div className="gameover col-12 col-sm-12">
      {props.gameDone}
      <div className="playAgainBtn">
        <Button secondary size="small" onClick={() => props.resetGame()}>Play again</Button>
      </div>
    </div>
  );
}

export default GameOver