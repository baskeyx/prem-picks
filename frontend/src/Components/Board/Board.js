import { useState } from 'react';
import Heading from '../Heading';
import Timer from '../Timer';
import Interval from '../Interval';
import Button from '../Button';

const Board = ({
  id,
  options,
  setView,
  setRoundScore,
  setCorrect,
}) => {
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(0);
  const [selected, setSelected] = useState(0);
  const start = () => {
    setLoading(false);
    setCorrect(false);
  };

  const select = (e) => {
    const { dataset } = e.target;
    setCorrect(dataset.id === id);
    setRoundScore(timer + 1);
    setSelected(dataset.id);
  };

  return (
    <>
      <Heading Type='h2'>Who's this player?</Heading>
      <div className='player-panel'>
        <div className='player-image'>
          <img src={`https://resources.premierleague.com/premierleague/photos/players/250x250/${id}.png`} alt='No Cheating!' onLoad={start} />
        </div>
        <div className='player-options'>
          {loading ? null
            : options.map((o) => (
              <Button key={o.id} data-id={o.id} theme={selected === o.id ? 'selected' : null}
                onClick={select}
              >
                {o.name}
              </Button>))
          }
        </div>
      </div>
      {loading ? null : <Interval
        setView={setView}
        setTimer={setTimer}
        timer={timer}
      />}
      <Timer started={!loading}/>
    </>
  );
};

export default Board;
