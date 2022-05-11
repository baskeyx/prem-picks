import { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import Round from '../../Components/Round';
import Score from '../Score';
import GameOver from '../GameOver';
import Fetch from '../../Components/Fetch';
import Server from '../../Server';

const Game = ({ id }) => {
  const [view, setView] = useState(0); // 0 round, 1 score, 2 final score
  const [score, setScore] = useState(0);
  const [roundScore, setRoundScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [gameId, setGameId] = useState('');

  const newGame = async () => {
    const gameResponse = await Fetch(`${Server}/api/game`, {
      method: 'POST',
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setGameId(gameResponse.payload.id);
    setScore(0);
    setView(0);
    ReactGA.event({ category: 'Game', action: 'Started', label: '' });
  };
  useEffect(async () => {
    newGame();
  }, []);
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
              gameId={gameId}
              setGameId={setGameId}
              id={id}
              newGame={newGame}
           /> : null}
    </>
  );
};

export default Game;
