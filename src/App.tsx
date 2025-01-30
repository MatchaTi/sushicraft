import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import GameBoard from './components/GameBoard';
import Navbar from './components/Navbar';
import { levels } from './lib/levels';

function App() {
  const [level, setLevel] = useState(0);
  const [isWrong, setIsWrong] = useState(false);
  const notify = () =>
    toast.custom(
      <div className='cursor-pointer border bg-[#1b1b1b] p-2 px-3 drop-shadow-[4px_4px_0_rgba(255,255,255,1)]'>
        Mantap!
      </div>,
    );

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
      notify();
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
      <div className='flex h-screen w-full items-center justify-center lg:hidden'>
        Maaf game ini hanya tersedia di desktop😿
      </div>
      <div className='hidden lg:block'>
        <Navbar />
        <Toaster />
        <div className=''>
          {level === levels.length ? (
            <div className='flex h-[calc(100vh-112px)] -translate-y-20 flex-col items-center justify-center gap-4'>
              <p>Selamat, Anda telah menyelesaikan game ini!</p>
              <button
                className='cursor-pointer border bg-[#1b1b1b] p-2 px-3 drop-shadow-[4px_4px_0_rgba(255,255,255,1)]'
                onClick={resetLevel}
              >
                Reset
              </button>
              <div>
                Made by{' '}
                <a href='https://github.com/MatchaTi' target='_blank'>
                  @Matchati
                </a>{' '}
                — come say hi!
              </div>
            </div>
          ) : (
            <>
              <GameBoard level={level} checkAnswer={checkAnswer} isWrong={isWrong} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
