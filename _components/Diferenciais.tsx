import React from 'react'
import Image from 'next/image'
import { diferenciais } from '@/data/diferenciais'

export default function Diferenciais() {
  return (
    <div className='flex  gap-8 justify-center items-center flex-wrap mb-20'>
        
      {diferenciais.map((d , index) => (
        <div className='flex flex-col gap-4 bg-[#f5f5f5] rounded-md shadow-lg w-90 h-40' key={index}>
            <Image className='ml-5 mt-5 border border-2 border-[#597f8b] rounded-md' width={50} height={50} src="https://ik.imagekit.io/gabrielySchiller/Clinica%20ondontologica/icons8-dente-100.png" alt='Icone'/>
        
             <h3 className=' text-[1.1rem] text-center font-extralight '>{d.titulo}</h3>
        </div>
      ))}
        
     
    </div>
  )
}
           


