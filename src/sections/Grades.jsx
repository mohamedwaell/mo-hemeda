import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { Grade } from '../const/index.js'



const Grades = () => {
  return (
    <section >
      <Navbar />
      <div className='flex flex-col md:flex-row items-center justify-center gap-10 h-[100vh] '>
        {Grade.map((grade) => (
          <div key={grade.id} className='flex flex-col items-center justify-center'>

            <Link to={`/grades/${grade.link}`} className='text-center'>
              <img src={grade.photo} className="w-50 md:w-80 rounded-xl" alt="" />

              <button className='text-2xl text-neon-white hover:text-neon-blue hover:scale-110 duration-500 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-semibold py-2 px-6 rounded-lg mt-5'>
                {grade.name}

              </button>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  )
}

export default Grades
