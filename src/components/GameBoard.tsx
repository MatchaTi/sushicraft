import { levels } from '../lib/levels';
import Editor from './Editor';

type GameBoardProps = {
  level: number;
  checkAnswer: (input: string) => void;
  isWrong: boolean;
};

export default function GameBoard({ level, checkAnswer, isWrong }: GameBoardProps) {
  return (
    <div className='h-[calc(100vh-112px)] max-h-[calc(100vh-112px)]'>
      <h1 className='mb-4 text-center text-5xl font-bold'>{levels[level].todo}</h1>
      <h2 className='mb-10 text-center text-3xl font-bold'>Level {level + 1}</h2>
      <div className='mx-auto mb-16 w-full max-w-[1020px] border-4 bg-[#1b1b1b] p-8 drop-shadow-[12px_12px_0_rgba(255,255,255,1)]'>
        <div
          dangerouslySetInnerHTML={{ __html: levels[level].html }}
          className='flex w-full items-center justify-around'
        />
      </div>
      <div className={`${isWrong && 'animate-wobble'} mx-auto grid w-full max-w-[1020px] grid-cols-2 border-8`}>
        <div className='row-start-1 row-end-3 p-8'>
          <div className='mb-6'>table.html</div>
          <pre>
            <code>{levels[level].boardMarkup}</code>
          </pre>
        </div>
        <div className='border-b-8 border-l-8 p-8'>
          <div className='mb-6'>style.css</div>
          <Editor onCheck={checkAnswer} />
        </div>
        <div className='border-l-8 p-8'>
          <div className='mb-6 flex items-center gap-3'>
            <img src='/hint.svg' alt='hint' />
            <div>Hint</div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='mb-3 underline underline-offset-8'>{levels[level].hintSelector}</div>
            <a href={levels[level].hintLink} target='_blank' rel='noreferrer'>
              <img src='/link.svg' alt='link' />
            </a>
          </div>
          <div>{levels[level].hintDesc}</div>
        </div>
      </div>
      <div className='mt-10 text-center'>Made by @Matchati — come say hi!</div>
    </div>
  );
}
