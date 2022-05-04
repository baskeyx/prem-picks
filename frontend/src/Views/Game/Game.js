import { useState } from 'react';
import Round from '../../Components/Round';
import Score from '../Score';
import GameOver from '../GameOver';

const Game = () => {
  const [view, setView] = useState(0); // 0 round, 1 score, 2 final score
  const [score, setScore] = useState(0);
  const [roundScore, setRoundScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  return (
    <>
      {view === 0
        ? <Round
            setView={setView}
            roundScore={roundScore}
            setRoundScore={setRoundScore}
            setCorrect={setCorrect}
          />
        : null}
        {view === 1
          ? <Score
              score={score}
              setScore={setScore}
              correct={correct}
              roundScore={roundScore}
              setView={setView}
              setRoundScore={setRoundScore}
           /> : null}
        {view === 2
          ? <GameOver
              score={score}
              setView={setView}
              setScore={setScore}
           /> : null}
    </>
  );
};

export default Game;
