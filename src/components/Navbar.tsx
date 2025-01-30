export default function Navbar() {
  return (
    <nav className='p-10 flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <img src="/logo.png" alt="logo" />
        <div className='font-bold'>Sushi Craft</div>
      </div>
      <div className='flex gap-3 items-center'>
        <a href="https://github.com/MatchaTi" target="_blank" className='flex items-center gap-3'>
          <img src="/github.svg" alt="logo" />
          <div className='font-bold'>Star Repo</div>
        </a>
        <a href="https://github.com/MatchaTi" target="_blank" className='flex items-center gap-2'>
          <img src="/donate.svg" className='w-12 h-7' alt="logo" />
          <div className='font-bold'>Donate</div>
        </a>
      </div>
    </nav>
  )
}

