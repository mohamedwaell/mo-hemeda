import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Typewriter from '../components/Text';
import Footer from '../components/Footer';
import Fetures from '../components/Fetures';
const Home = () => {
  return (
    <>
      <Navbar />

      <div className='flex flex-col items-center justify-between  flex-col md:flex-row  overflow-hidden'>
        <div className='flex items-center justify-center h-full md:w-1/2 pt-20 md:pt-0 '>
          <img src="./home/hero.png" alt="" className='w-full md:w-[80%]  rounded-full hover:scale-105 duration-500 ' />
        </div>
        <div className='flex items-center justify-center flex-col h-full md:w-1/2 h-[50vh] '>
        <h1 className='text-6xl md:text-7xl text-white mb-10 text-center md:text-right md:mr-10'> <span className='text-black dark:text-white'> الاستاذ </span> <span className='text-[#FFD700]'> محمد حميده</span></h1>
          <Typewriter />

          <Link to={'/grades'} className='flex items-center justify-center bg-blue-500 py-2 px-6 rounded-lg mt-10
             text-white text-2xl font-bold hover:scale-105 transition-all duration-300 shadow-md'>
            <img src="./home/yala-pena.png" alt="" className='w-15 mr-5' />

            <button className=''>يلا بينا </button>
          </Link>
        </div>
      </div>
      <Fetures />
      <Footer />
    </>

  )
}

export default Home
