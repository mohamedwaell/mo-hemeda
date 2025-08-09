import React, { useEffect, useRef } from 'react'
// import { services } from '../const/index.js'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Book from './Book.jsx'
import { services } from '../const/index.js'
const Fetures = () => {
  const [IsMobile, setIsMobile] = React.useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  })
  const Scene = () => {
    const ref = useRef();
    useFrame(() => {
      ref.current.rotation.y += 0.01
    })
    return (
      <>
        <ambientLight />
        <group position={[0, 0, 0]} scale={.02} ref={ref}>
          <Book />
        </group>
        {!IsMobile && <OrbitControls enableZoom={false} />}
      </>

    )
  }


  return (
    <section>
       <div className='flex justify-center flex-row my-10 text-center items-center gap-10 text-black dark:text-white'>
      <div className='w-1/4 md:w-1/3'>
        {IsMobile ? (


          <Canvas camera={{ position: [0, 0, 13], fov: 70 }} style={{ height: '100%', width: '100%' }} >

            <Scene />
          </Canvas>


        ) : (

          <Canvas camera={{ position: [0, 0, 9], fov: 65 }} style={{ height: '30vh', width: '100%' }} >

            <Scene />

          </Canvas>

        )}
      </div>

      <h1 className='text-3xl md:text-7xl text-black dark:text-white'> <span className='text-blue-500'>?..</span> خدماتنا</h1>

    </div>
    <div className='flex flex-col md:flex-row gap-10 items-center justify-center'>
      {services.map((service) => {
        return (
          <div key={service.id} className= 'w-[300px] md:w-[350px] h-[300px] md:h-[350px] flex flex-col items-center justify-center text-center gap-10 p-5 mx-5 rounded-3xl bg-no-repeat bg-cover bg-contain ' style={{ backgroundImage: `url(${service.bg})` }}>
            <img src={service.icon} className="w-20 md:w-40" alt="" />
            <h1 className='text-2xl md:text-3xl text-white'>{service.description}</h1>
          </div>
        )
      })}
      </div>
    </section>
   
  )
}

export default Fetures

