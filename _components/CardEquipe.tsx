import React from 'react'
import {equipe} from '../data/equipe';

export default function CardEquipe(){




  return (
    <div className=' lg:flex grip grid-cols-2  md:gap-5 md:justify-center lg:flex-wrap items-center'>
      {equipe.map((membro, index) =>(
       
       <div key={index} className='bg-[#597f8b] md:w-55 shadow-md  rounded-md mb-10 relative h-60 text-white px-5 py-5 flex flex-col items-center justify-center gap-3'>
          
          <div>
            <img className='md:w-35 w-25 absolute top-[-20] left-[40] rounded-full' src={membro.img || "/placeholder.png"} alt={`Foto  ${membro.nome}`}/>
          </div>
        
          <div className='text-center mt-14 md:mt-25'>
             <h3 className='font-bold text-[1rem] w-45 '>{membro.nome}</h3>
             <p className='text-[0.85rem] '>{membro.atuacao}</p>
          </div>

          <div>
            <a className='rounded-md font-medium text-[0.9rem] px-2 py-1 text-center bg-white text-black' href="https://wa.me/">Agendar consulta</a>
          </div>

        </div>

      ))}
    </div>
  )
}

