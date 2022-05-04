import { useEffect } from 'react';
import Heading from '../../Components/Heading';
import Bubble from '../../Components/Bubble';
import Button from '../../Components/Button';
import Anchor from '../../Components/Anchor';
import Flex from '../../Components/Flex';

const GameOver = ({ score, setScore, setView }) => {
  useEffect(() => {
    console.log(score);
    return () => setScore(0);
  }, []);
  return (
    <>
      <Heading Type='h1'>Game Over</Heading>
      <Bubble theme='score'><div>Final Score:</div>{score}</Bubble>
      <Heading Type='h1'>Challenge your friends</Heading>
      <Flex>
        <Anchor target='_blank' href={`http://twitter.com/share?text=I scored ${score} points on @picks_epl - Think you can beat me?! &url=${encodeURIComponent(window.location.href)}&hashtags=PremPicks,EPL,PremierLeague`}>
          Twitter
        </Anchor>
        <Anchor href={`whatsapp://send?text=I scored ${score} points on PremPicks - think you can beat me? ${encodeURIComponent(window.location.href)}`}>Whatsapp</Anchor>
      </Flex>
      <Button onClick={() => setView(0)}>Play Again</Button>
    </>
  );
};

export default GameOver;
