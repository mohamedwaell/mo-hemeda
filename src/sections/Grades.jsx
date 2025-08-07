import React from 'react'

import { Link } from 'react-router-dom'
import { Grade } from '../const/index.js'



const Grades = () => {
  return (
    <section >
      <div className='flex flex-col  items-center justify-center gap-10  my-5 '>
        <h1 className='text-5xl text-green-500 text-center '>السنوات الدراسيه</h1>
        <div className='flex flex-col md:flex-row items-center justify-center gap-10 '>
          {Grade.map((grade) => (
            <div key={grade.id} className='flex flex-col items-center justify-center'>

              <Link to={`/grades/${grade.link}`} className='text-center'>
                <img src={grade.photo} className="w-50 md:w-80 rounded-xl" alt="" />
                <button className='text-2xl text-white hover:text-neon-blue hover:scale-110 duration-500 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-semibold py-2 px-6 rounded-lg mt-5'>
                  {grade.name}

                </button>
                 
              </Link>
            </div>
          ))}

        </div>
      
      </div>

    </section>
  )
}

export default Grades
