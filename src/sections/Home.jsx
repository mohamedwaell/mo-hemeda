import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Typewriter from '../components/Text';
import Footer from '../components/Footer';
const Home = () => {
  return ( 
    <>
      <Navbar />

      <div className='flex flex-col items-center justify-between  flex-col md:flex-row h-[100vh] '>
      <div className='flex items-center justify-center h-full md:w-1/2 pt-20 md:pt-0 '>
        <img src="./home/hero.png" alt="" className='w-full  rounded-full hover:scale-105 duration-500 '/>
      </div>
      <div className='flex items-center justify-center flex-col h-full md:w-1/2 h-[50vh] '>
        <Typewriter />
        
        <Link to={'/grades'} className='flex items-center justify-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
             text-white font-semibold py-2 px-6 rounded-lg mt-10
             hover:from-blue-600 hover:to-blue-800
             hover:scale-105 transition-all duration-300 shadow-md'>
         <img src="./home/yala-pena.png" alt="" className='w-15 mr-5'/>

        <button className=''>يلا بينا </button>
        </Link>
      </div>
    </div>
   
    <Footer />
    </>
  
  )
}

export default Home
