import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Typewriter from '../components/Text'
import Footer from '../components/Footer'
import Fetures from '../components/Fetures'
import Grades from './Grades'

const Home = () => {
  const featuresRef = useRef(null)

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navbar />

      <div className='flex flex-col items-center justify-between md:flex-row overflow-hidden h-screen'>
        <div className='flex items-center justify-center h-full md:w-1/2 '>
          <img
            src="./home/hero.png"
            alt=""
            className='w-full md:w-[80%] rounded-full hover:scale-105 duration-500'
          />
        </div>

        <div className='flex items-center justify-center flex-col h-full md:w-1/2 h-[50vh]'>
          <h1 className='text-5xl md:text-6xl text-white mb-10 text-center md:text-right md:mr-10'>
            <span className='text-black dark:text-white'> الاستاذ </span>
            <span className='text-blue-500'>محمد حميده</span>
          </h1>

          <Typewriter />

          <div
            onClick={scrollToFeatures}
            className='flex items-center justify-center bg-blue-500 py-2 px-6 rounded-lg mt-10
             text-white text-2xl font-bold hover:scale-105 transition-all duration-300 shadow-md cursor-pointer'
          >
            <img src="./home/yala-pena.png" alt="" className='w-15 mr-5' />
            <button className=''>يلا بينا</button>
          </div>
        </div>
      </div>

      <div ref={featuresRef}>
        <Fetures />
      </div>

      <Grades />
      <Footer />
    </>
  )
}

export default Home
