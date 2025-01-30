import { useEffect, useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import Navbar from './components/Navbar';
import { levels } from './lib/levels';

function App() {
  const [level, setLevel] = useState(0);
  const [isWrong, setIsWrong] = useState(false);

  useEffect(() => {
    const savedLevel = localStorage.getItem('level');
    if (savedLevel) {
      setLevel(parseInt(savedLevel));
    }
  }, []);

  const checkAnswer = (input: string) => {
    if (input === levels[level].selector) {
      setLevel((prev) => prev + 1);
      localStorage.setItem('level', (level + 1).toString());
    } else {
      setIsWrong(true);
      setTimeout(() => {
        setIsWrong(false);
      }, 400);
    }
  };

  const resetLevel = () => {
    localStorage.removeItem('level');
    setLevel(0);
  };

  return (
    <>
      <Navbar />
      <div className=''>
        {level === levels.length ? (
          <div className='mt-4'>
            <p>Selamat, Anda telah menyelesaikan game ini!</p>
            <button className='rounded bg-blue-400 p-4' onClick={resetLevel}>
              Reset
            </button>
            <div>Made by @Matchati — come say hi!</div>
          </div>
        ) : (
          <>
            <GameBoard level={level} checkAnswer={checkAnswer} isWrong={isWrong} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
