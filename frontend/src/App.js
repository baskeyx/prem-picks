import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactGA from 'react-ga';
import Start from './Views/Start';
import Game from './Views/Game/Game';
import Header from './Components/Header';
import './App.css';

const TRACKING_ID = 'G-42MFRLJH0Q';
ReactGA.initialize(TRACKING_ID);

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
