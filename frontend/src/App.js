import { useState } from 'react';
import Start from './Views/Start';
import Game from './Views/Game/Game';
import Header from './Components/Header';
import './App.css';

const App = () => {
  const [view, setView] = useState(0);
  return (
    <div className="App">
      <Header />
      { view === 0 ? <Start setView={setView}/> : null }
      { view === 1 ? <Game setView={setView}/> : null }
    </div>
  );
};

export default App;
