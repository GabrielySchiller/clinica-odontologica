'use client'

import { useEffect, useState } from 'react'
import { services } from '../data/servicos'

export default function CardServicos() {
   
  const [indexAtual, setIndexAtual] = useState(0);
  const [cardsPorVez, setCardsPorVez] = useState(2)

  const total = services.length;

  useEffect(() =>{
    const atualizarTamanho = () =>{
      if(window.innerWidth < 768){
        setCardsPorVez(1)
      }else{
        setCardsPorVez(2)
      }
    }

    atualizarTamanho();
    window.addEventListener('resize', atualizarTamanho)
    return() => window.removeEventListener('resize', atualizarTamanho)
  }, [])

 
  const proximo = () =>{
    setIndexAtual((prev) =>  (prev + cardsPorVez) % total)
  }

  const anterior = () =>{
    setIndexAtual((prev) => ( prev - cardsPorVez + total ) % total)
  }

  const servicosVisiveis = Array.from({length: cardsPorVez}, (_, i) => services[(indexAtual + i) % total])

  return (
    <div data-aos="fade-left" className=" items-center gap-5 flex justify-center">
       
       <div>
        <button className='outline-none focus:ring-2 focus:ring-[#88aebb]' onClick={anterior}>
          <img className='md:w-10 w-8' src="https://ik.imagekit.io/gabrielySchiller/Clinica%20ondontologica/icons8-seta-esquerda-100.png" alt="passar para esquerda"/>
        </button>
       </div>


      <div className='flex gap-5 justify-center items-center '>
       {servicosVisiveis.map((service, index) =>(
           <div className='bg-white flex flex-col items-center shadow-md w-52  justify-center rounded-md lg:w-56' key={index}>
               <div>
                <img width={170} height={170} src={service.img} />
               </div>
            
               <div className='text-center h-26 mb-10'>
                   <h3 className='font-semibold' >{service.title}</h3>
                   <p className='text-[0.92rem] text-center mx-3 mt-3'>{service.description}</p>
               </div>
           </div>
       ))}
     </div>

     <div>
        <button className='outline-none focus:ring-2 focus:ring-[#88aebb]' onClick={proximo}>
          <img className='md:w-10 w-8 ' src="https://ik.imagekit.io/gabrielySchiller/Clinica%20ondontologica/icons8-seta-direita-100.png" alt="passar para direita"/>
        </button>
       </div>
    </div>
  )
}
   
