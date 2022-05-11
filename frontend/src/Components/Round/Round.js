import { useState, useEffect } from 'react';
import Fetch from '../Fetch';
import Board from '../Board/Board';
import Server from '../../Server';

const Round = ({
  setView,
  setRoundScore,
  setCorrect,
}) => {
  const [options, setOptions] = useState([]);
  const [id, setId] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getOptions = async () => {
      const playersResponse = await Fetch(`${Server}/api/player`);
      const correct = playersResponse.payload.players.find((player) => player.status);
      setId(correct.id);
      setOptions(playersResponse.payload.players);
      setLoading(false);
    };
    getOptions();
  }, []);
  return (
    <>
      {loading ? null : <Board
        id={id}
        setView={setView}
        options={options}
        setRoundScore={setRoundScore}
        setCorrect={setCorrect}
      />}
    </>
  );
};

export default Round;
