export default function Navbar() {
  return (
    <nav className='flex items-center justify-between p-10'>
      <div className='flex items-center gap-3'>
        <img src='/logo.png' alt='logo' />
        <div className='font-bold'>Sushi Craft</div>
      </div>
      <div className='flex items-center gap-3'>
        <a href='https://github.com/MatchaTi/sushicraft' target='_blank' className='flex items-center gap-3'>
          <img src='/github.svg' alt='logo' />
          <div className='font-bold'>Star Repo</div>
        </a>
        <a href='https://github.com/MatchaTi' target='_blank' className='flex items-center gap-2'>
          <img src='/donate.svg' className='h-7 w-12' alt='logo' />
          <div className='font-bold'>Donate</div>
        </a>
      </div>
    </nav>
  );
}
