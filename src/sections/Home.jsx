import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Typewriter from '../components/Text';
import Footer from '../components/Footer';
import Fetures from '../components/Fetures';
import Grades from './Grades';

const Home = () => {
  const featuresRef = useRef(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />

      <div className='flex flex-col items-center justify-center gap-10 md:gap-15 lg:flex-row overflow-hidden min-h-screen'>
        <div className='flex items-center justify-center h-full lg:w-1/2'>
          <img
            src="./home/hero.png"
            alt=""
            className='w-full lg:w-[85%] rounded-full hover:scale-105 transition-transform duration-500'
          />
        </div>

        <div className='flex items-center justify-center flex-col h-full lg:w-1/2 p-4'>
          <h1 className='text-4xl lg:text-6xl text-white mb-5 lg:mb-10 text-center lg:text-right'>
            <span className='text-black dark:text-white'> الاستاذ </span>
            <span className='text-blue-500'>محمد حميده</span>
          </h1>

          <Typewriter />

          <div
            onClick={scrollToFeatures}
            className='flex items-center justify-center bg-blue-500 py-2 px-4 md:px-6 rounded-lg mt-5 md:mt-10
             text-white text-lg md:text-2xl font-bold hover:scale-105 transition-transform duration-300 shadow-md cursor-pointer'
          >
            <img src="./home/yala-pena.png" alt="" className='w-8 md:w-12 mr-4' />
            <button>يلا بينا</button>
          </div>
        </div>
      </div>

      <div ref={featuresRef}>
        <Fetures />
      </div>

      <Grades />
      <Footer />
    </>
  );
};

export default Home;

