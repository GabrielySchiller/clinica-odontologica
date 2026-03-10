import React from 'react'
import Image from 'next/image'
import { diferenciais } from '@/data/diferenciais'

export default function Diferenciais() {
  return (
    <div className='flex  gap-8 justify-center items-center flex-wrap mb-20'>
        
      {diferenciais.map((d , index) => (
        <div className='flex justify-center gap-2 w-30 items-center flex-col md:gap-4 bg-[#f5f5f5] rounded-md shadow-lg lg:w-90 lg:h-40' key={index}>
            
            <div className='flex justify-' >
              <img className='ml-5 mt-5 border md:w-13 w-10 border-[#597f8b] rounded-md' src="https://ik.imagekit.io/gabrielySchiller/Clinica%20ondontologica/icons8-dente-100.png" alt='Icone'/>
             </div>

             <div className='flex justify-center w-10 lg:w-70 text-center'>
               <h3 className=' md:text-[1.1rem] text-[0.8rem] text-center font-extralight '>{d.titulo}</h3>
             </div>

        </div>
      ))}
        
     
    </div>
  )
}
           


