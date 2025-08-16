import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Switch from './Switch';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
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

  useGSAP(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 2, ease: 'power1.inOut', delay: 2 }
      );
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 m-4 px-4 py-2 rounded-xl flex justify-between items-center z-50 
                 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"
    >
      {/* Logo */}
      <Link to="/" className="text-white text-2xl flex flex-row items-center">
        <img src='/home/face.png' className='w-10 md:w-16 object-contain' alt="logo" />
        <div className='w-[2px] md:w-1 md:h-12 h-8 bg-white'></div>
        <div className='text-center ml-2 text-white text-[10px] md:text-sm font-bold'>
          <p>over dose</p>
          <p>math</p>
        </div>
      </Link>

      {/* Theme switch */}
      <div className='flex items-center gap-4'>
        <Switch isDark={isDark} toggleTheme={toggleTheme} />

        <p className='text-white text-sm md:text-lg font-bold'>
          {isDark ? 'dark' : 'light'}
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
