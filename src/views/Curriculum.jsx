import React from 'react'
import { Navigator } from '../components/Navigator'
import { Educacion } from '../components/Educacion'
import fondo from "../assets/fondopc.jpg"

export const Curriculum = () => {
  return (
    <>
    <figure className="fixed -z-10 top-0 left-0 ring-0 bottom-0 w-full">
        <img
          src={fondo}
          alt="fondo"
          className="w-full blur-sm h-[100vh] object-cover"
        />
      </figure>
     <Navigator />
     <div className='p-10'>
        <h2 className='py-4 font-Neue font-bold text-5xl text-white text-center'>Certificaciones y educación</h2>
        <section className='w-full md:w-[65%] m-auto'>
        <Educacion />
        </section>
     </div>
    </>
  )
}
