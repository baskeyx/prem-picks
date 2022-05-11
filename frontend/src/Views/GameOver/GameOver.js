import { useState, useEffect } from 'react';
import Heading from '../../Components/Heading';
import Bubble from '../../Components/Bubble';
import Button from '../../Components/Button';
import Anchor from '../../Components/Anchor';
import Flex from '../../Components/Flex';
import Fetch from '../../Components/Fetch';
import Server from '../../Server';

const GameOver = ({
  score,
  id,
  gameId,
  newGame,
}) => {
  const [position, setPosition] = useState('');
  useEffect(async () => {
    const gameResponse = await Fetch(`${Server}/api/game/${gameId}`, {
      method: 'PUT',
      body: JSON.stringify({ userId: id, score }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setPosition(gameResponse.payload.position);
  }, []);

  return (
    <>
      <Heading Type='h1'>Game Over</Heading>
      <Bubble theme='score'><div>Final Score:</div>{score}
      <Bubble theme='position'><div>Position: </div>{position}</Bubble></Bubble>
      <Heading Type='h1'>Challenge your friends</Heading>
      <Flex>
        <Anchor target='_blank' href={`http://twitter.com/share?text=I scored ${score} points on @picks_epl - Think you can beat me?! &url=${encodeURIComponent(window.location.href)}&hashtags=PremPicks,EPL,PremierLeague`}>
          Twitter
        </Anchor>
        <Anchor href={`whatsapp://send?text=I scored ${score} points on PremPicks - think you can beat me? ${encodeURIComponent(window.location.href)}`}>Whatsapp</Anchor>
      </Flex>
      <Button onClick={newGame}>Play Again</Button>
    </>
  );
};

export default GameOver;
