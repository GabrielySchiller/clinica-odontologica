import React from 'react'
import { services } from '../data/servicos'

export default function CardServicos() {
  return (
    <div className="grid  grid-cols-2 md:grid-cols-3  gap-5 lg:grid-none lg:flex lg:flex-wrap justify-center">
       {services.map((service, index) =>(
           <div className='bg-white flex flex-col items-center shadow-md  justify-center rounded-md lg:w-56' key={index}>
               <div>
                <img width={170} height={170} src={service.img} />
               </div>
            
               <div className='text-center mb-10'>
                   <h3 className='font-semibold' >{service.title}</h3>
                   <p className='text-[0.9rem] text-center mx-2 mt-3'>{service.description}</p>
               </div>
           </div>
      ))}
    </div>
  )
}
   
