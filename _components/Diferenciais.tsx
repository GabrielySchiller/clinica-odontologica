import React from 'react'
import Image from 'next/image'
import { diferenciais } from '@/data/diferenciais'

export default function Diferenciais() {
  return (
    <div className='flex  gap-8 justify-center items-center flex-wrap mb-20'>
        
      {diferenciais.map((d , index) => (
        <div className='flex justify-center text-center h-30 p-4 md:w-60 md:h-40 gap-2 w-30 items-center flex-col md:gap-4 bg-[#f5f5f5] rounded-md shadow-lg lg:w-50 lg:h-38' key={index}>
            
            <div className='flex justify-center items-center' >
              <img className='  border md:w-11 w-9 border-[#597f8b] rounded-md' src="https://ik.imagekit.io/gabrielySchiller/Clinica%20ondontologica/icons8-dente-100.png" alt='Icone'/>
             </div>

             <div className='flex flex-wrap justify-center w-10 lg:px-6 lg:w-60 text-center'>
               <h3 className=' md:text-[1.0rem] text-[0.8rem] text-center font-extralight '>{d.titulo}</h3>
             </div>

        </div>
      ))}
        
     
    </div>
  )
}
           


