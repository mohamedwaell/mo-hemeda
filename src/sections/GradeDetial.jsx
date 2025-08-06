import React from 'react'
import { useParams } from 'react-router-dom'
import { Grade } from '../const/index.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
const GradeDetial = () => {
  const { link } = useParams();
  const matchedGrade = Grade.find((grade) => grade.link === link);

  return (
    <section >
      <Navbar />
      <div className='flex flex-col items-center justify-center gap-10 h-[100vh] '>

        <img src={matchedGrade.photo} className="w-50 md:w-80 rounded-xl" alt="" />
        <h1 className='text-center text-3xl text-neon-white'>{matchedGrade.name}</h1>

      </div>
      <Footer />
    </section>
  )
}

export default GradeDetial
