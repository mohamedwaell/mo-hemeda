import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    // Check saved theme or fallback to system
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      root.classList.add('dark');
      setIsDark(true);
    } else {
      root.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme = isDark ? 'light' : 'dark';

    root.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
    setIsDark(!isDark);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 m-4 mx-4 md:mx-50 px-4 rounded-xl flex justify-between items-center z-45 bg-[#000] dark:bg-[#fff]">
      <Link to="/" className="text-white text-2xl">
        <img src={isDark ? '/home/logo-dark.png' : '/home/logo-light.png'  } alt="logo" className="w-12 md:w-16 object-contain" />
      </Link>

      <div className='flex items-center gap-4'>
        <button
        onClick={toggleTheme}
        className="relative w-16 flex items-center justify-center"
      >
       <img src='/home/navButton.gif' className='absolute w-20 object-contain'></img>
      </button>
      <p className='text-white text-2xl dark:text-[#000] text-bold'>{isDark ? 'dark': 'light'}</p>
      </div>
      
    </nav>
  );
};

export default Navbar;
