import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Typewriter from '../components/Text';
import Footer from '../components/Footer';
import Fetures from '../components/Fetures';
import Grades from './Grades';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import WhatsAppButton from '../components/WhatsAppButton';

gsap.registerPlugin(SplitText);

const Home = () => {
  const timeLine = gsap.timeline();
  const splitRef = useRef(null); // reference for split text
  const featuresRef = useRef(null);

  useGSAP(() => {
    // Step 1: create split instance after element exists
    // const split = new SplitText(splitRef.current, { type: 'words,chars' });

    // Step 2: animate sections first
    timeLine.fromTo("#home", { opacity: 0, x: -400 }, { opacity: 1, duration: 2, x: 0 , ease: "power2.out" ,delay: 3})
      timeLine.fromTo("#text", { opacity: 0, x: 400 }, { opacity: 1, duration: 2, x: 0  , ease: "power2.out" })
      
      timeLine.from(".split", {
        x: 150,
        opacity: 0,
        duration: 1.5,
        ease: "power4",
        stagger: 0.04
      });

    // return () => {
    //   split.revert(); 
    // };
  });

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
        
      <Navbar />
      <div className='flex flex-col items-center justify-center gap-10 md:gap-15 lg:flex-row pb-10 lg:pb-0 min-h-screen overflow-hidden w-full'>
        <div id='home' className='flex items-center justify-center h-full lg:w-1/2'>
          <img
            src="./home/hero.png"
            alt=""
            className='w-full lg:w-[85%] rounded-full hover:scale-105 transition-transform duration-500'
          />
        </div>

        <div id='text' className='flex items-center justify-center flex-col h-full lg:w-1/2 p-4'>
          <h1
            ref={splitRef} 
            className='split text-4xl lg:text-6xl text-white mb-5 lg:mb-10 text-center lg:text-right'
          >
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
      <WhatsAppButton />

      <Footer />
    </>
  );
};

export default Home;
