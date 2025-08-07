import React from 'react'
import { services } from '../const/index.js'
const Fetures = () => {
  return (
    <div className='flex justify-between flex-col my-10 text-center gap-10 text-black dark:text-white'>
      <h1 className='text-7xl text-black dark:text-white'>خدماتنا</h1>
      <div className='flex flex-wrap justify-center gap-10'>
        {services.map((service)=>{
            return(
         <div key={service.id} className='w-[300px] text-2xl rounded-[15px] mx-5 overflow-hidden   content-center transition-transform duration-300 hover:-translate-y-2'>
         <img src={`/features/${service.id}.jpg`} />
         </div>
            )
        })}
      </div>
    </div>
  )
}

export default Fetures
