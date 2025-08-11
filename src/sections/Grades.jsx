import React from 'react'
import  {  useRef } from "react";

import { Link } from 'react-router-dom'
import { Grade } from '../const/index.js'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);


const Grades = () => {

  const scrollRef = useRef(null);
  const href = useRef(null);
  
    useGSAP(() => {
      if (!scrollRef.current) return;
  
      gsap.fromTo(
        href.current,
        {
          opacity: 0,
          x: 400,
          delay: 2
        },
        {
          opacity: 1,
          x: 0,
          duration: 3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: href.current,
            start: "bottom bottom", // start when box is near viewport
            end: "top 30%",
            scrub: true,
          },
        }
      );
      const boxes = gsap.utils.toArray(scrollRef.current.children);
      boxes.forEach((box) => {
        gsap.fromTo(
          box,
          {
            opacity: 0,
            y: 100, 
            scale: 0.5,
          delay:4
           
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
           duration: 3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: box,
              start: "top bottom", // start when box is near viewport
              end: "top 50%",
              scrub: true,
            },
          }
        );
      });
  
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }, []);
  
  return (
    <section className='my-30 w-full overflow-hidden'>
      <div className='flex flex-col items-center justify-center gap-20 my-5 md:my-10'>
        <h1 className='text-3xl md:text-5xl text-green-500 text-center font-bold ' ref={href}>السنوات الدراسيه</h1>
        <div className='flex flex-wrap items-center justify-center  gap-5 md:gap-10 mx-5 md:mx-10' ref={scrollRef}>
          {Grade.map((grade) => (
            <div key={grade.id} className='flex flex-col items-center justify-center'>
              <Link to={`/grades/${grade.name}`}>
                <div className='flex flex-col mb-10 cursor-pointer'>
                  <div className='group rounded-xl overflow-hidden aspect-w-16 aspect-h-9 w-[300px] lg:w-[400px] md:w-[550px]  '>
                    <img src={grade.photo} className="w-full h-full object-cover transform group-hover:scale-110 duration-500 ease-in-out grayscale-30 hover:grayscale-0" alt="" />

                  </div>
                  <div className='group px-4 mx-4 px-4 md:px-8 py-4 rounded-md -mt-10 bg-gray-100 dark:bg-gray-900 text-black dark:text-gray-200 z-10 hover:scale-105 duration-500  '>
                    <h1 className='text-center text-lg md:text-4xl lg:text-3xl '>{grade.name}</h1>
                    <div className='w-full h-1 bg-[#c4d14f] my-2'></div>
                    <h1 className='text-center text-sm md:text-xl lg:text-lg text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'>دروس {grade.name}</h1>

                  </div>

                </div>


              </Link>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Grades

