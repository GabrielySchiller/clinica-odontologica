'use client'
import React from 'react'
import {equipe} from '../data/equipe';
import { useState } from 'react';



export default function CardEquipe(){
  
   const [mostrarMais, setMostrarMais] = useState(false);
   const membrosVisiveis = mostrarMais ? equipe : equipe.slice(0,4);

  return (

    <div className='w-full flex grip grid-cols-2 gap-5 flex-col justify-center items-center'>
     
     <div className='flex gap-5 flex-wrap justify-center items-center'>
      {membrosVisiveis.map((membro, index) =>(
       
       <div key={index} className='bg-[#597f8b] md:w-55 shadow-md w-40  rounded-md mb-10 relative lg:h-60 text-white px-5 py-5 flex flex-col items-center justify-center gap-3'>
          
          <div>
            <img className='md:w-35 w-25 absolute top-[-20] left-[30] lg:left-[40] rounded-full' src={membro.img || "/placeholder.png"} alt={`Foto  ${membro.nome}`}/>
          </div>
        
          <div className='text-center mt-14 md:mt-25'>
             <h3 className='font-bold text-[0.8rem] lg:text-[1rem] w-45 '>{membro.nome}</h3>
             <p className='text-[0.85rem] '>{membro.atuacao}</p>
          </div>

          <div>
            <a className='rounded-md font-medium text-[0.8rem] lg:text-[0.9rem] px-2 py-1 text-center bg-white text-black' href="https://wa.me/">Agendar consulta</a>
          </div>

        </div>

      ))}
      </div>
       

       {equipe.length > 4 &&(
         <button className='outline-none focus:ring-2 focus:ring-[#597f8b] bg-[#597f8b] text-white text-[1.01rem]  px-4 py-2 rounded-md hover:scale-[1.05] ' onClick={() => setMostrarMais(!mostrarMais)}>
           {mostrarMais ? 'Menos' : 'Mais ...'}
         </button>
        )}

    </div>
  )
}



