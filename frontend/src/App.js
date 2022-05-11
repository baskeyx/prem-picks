import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TagManager from 'react-gtm-module';
import Start from './Views/Start';
import Game from './Views/Game/Game';
import Header from './Components/Header';
import './App.css';

const tagManagerArgs = {
  gtmId: 'G-42MFRLJH0Q',
};

TagManager.initialize(tagManagerArgs);

const App = () => {
  const [view, setView] = useState(0);
  const [id, setId] = useState(0);
  useEffect(() => {
    if (localStorage.ppid) {
      setId(localStorage.ppid);
    } else {
      const generateId = uuidv4();
      localStorage.ppid = generateId;
      setId(generateId);
    }
  }, []);
  return (
    <div className="App">
      <Header />
      { view === 0 ? <Start setView={setView}/> : null }
      { view === 1 ? <Game id={id} setView={setView}/> : null }
    </div>
  );
};

export default App;
