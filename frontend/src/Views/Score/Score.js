import { useEffect, useState } from 'react';
import NumberEasing from 'react-number-easing';
import Bubble from '../../Components/Bubble';
import Heading from '../../Components/Heading';

const Score = ({
  roundScore,
  correct,
  score,
  setScore,
  setRoundScore,
  setView,
}) => {
  const [feedback, setFeedback] = useState('');
  const feedbacks = ['', 'Cleared off the line!', 'In off the post!', 'Slots it home!', 'An absolute belter!', 'I swear you’ll never see anything like this every again!'];
  useEffect(() => {
    if (correct) {
      setFeedback(feedbacks[roundScore]);
      setTimeout(() => {
        setScore(score + roundScore);
        setRoundScore(0);
      }, 1000);
      setTimeout(() => {
        setView(0);
      }, 4000);
    } else {
      setView(2);
    }
  }, []);
  return (
    <div>
      <Heading Type='h1'>Correct!</Heading>
      <section>
        <Bubble theme='score'>
          <div>Score:</div>
          <NumberEasing
            value={score}
            speed={1000}
            decimals={0}
            ease='quintInOut' />
          <Bubble theme='display'>+ <NumberEasing
            value={roundScore}
            speed={1000}
            decimals={0}
            ease='quintInOut' />
          </Bubble>
        </Bubble>
      </section>
      <Heading Type='h2'>{feedback}</Heading>
    </div>
  );
};

export default Score;
