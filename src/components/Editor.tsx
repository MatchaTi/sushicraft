import { useEffect, useState } from 'react';

type EditorProps = {
  onCheck: (input: string) => void;
};

export default function Editor({ onCheck }: EditorProps) {
  const [input, setInput] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onCheck(input);
        setInput('');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [input, onCheck]);

  return (
    <div className='flex items-center gap-3'>
      <input
        type='text'
        className='w-full p-2'
        placeholder='Contoh: plate > sushi'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className='cursor-pointer border bg-[#1b1b1b] p-2 px-3 drop-shadow-[4px_4px_0_rgba(255,255,255,1)]'
        onClick={() => onCheck(input)}
      >
        Submit
      </button>
    </div>
  );
}
