'use client'

import { useEffect, useState } from 'react'
import { depoimentos } from '../data/textosDepoimentos'

export default function CardServicos() {
   
  const [indexAtual, setIndexAtual] = useState(0);
  const [cardsPorVez, setCardsPorVez] = useState(2)
  const [depoimentosImg, setDepoimentosImg] = useState(depoimentos)

  const total = depoimentos.length;

  useEffect(() => {
    async function carregarImagens(){
        const res = await fetch(`https://randomuser.me/api/?results=${depoimentos.length}&nat=br&seed=clinica`)
        const data = await res.json();
        const imagens = data.results.map((p: any) => p.picture.large)
        const novosDepoimentos = depoimentos.map((dep, index) => ({
            ...dep,
            img:imagens[index] || '/placeholder.png'
        }))
        setDepoimentosImg(novosDepoimentos)
    }
    carregarImagens()
  }, [] )

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

  const depoimentosVisiveis = Array.from({length: cardsPorVez}, (_, i) => depoimentosImg[(indexAtual + i) % total])

  return (
    <div data-aos="fade-left" className=" items-center gap-5 flex justify-center">
       
       <div>
        <button className='outline-none focus:ring-2 focus:ring-[#88aebb]' onClick={anterior}>
          <img className='md:w-10 w-8' src="https://ik.imagekit.io/gabrielySchiller/Clinica%20ondontologica/icons8-seta-esquerda-100.png" alt="passar para esquerda"/>
        </button>
       </div>


      <div className='flex gap-5 justify-center items-center '>
       {depoimentosVisiveis.map((testimony, index) =>(
           <div className='bg-[#f5f8f8] flex flex-col p-2 items-center shadow-md w-55  justify-center rounded-md lg:w-66' key={index}>
               <div className='p-1'>
                <img className='rounded-full' width={80} height={80} src={testimony.img} />
               </div>

               <div className='flex mt-4'>
                  <img className='w-5' src="https://ik.imagekit.io/gabrielySchiller/Clinica%20ondontologica/icons8-estrela-96.png" alt="" />
                  <img className='w-5' src="https://ik.imagekit.io/gabrielySchiller/Clinica%20ondontologica/icons8-estrela-96.png" alt="" />
                  <img className='w-5' src="https://ik.imagekit.io/gabrielySchiller/Clinica%20ondontologica/icons8-estrela-96.png" alt="" />
                  <img className='w-5' src="https://ik.imagekit.io/gabrielySchiller/Clinica%20ondontologica/icons8-estrela-96.png" alt="" />
                  <img className='w-5' src="https://ik.imagekit.io/gabrielySchiller/Clinica%20ondontologica/icons8-estrela-96.png" alt="" />
               </div>
            
               <div className='text-center mt-3 h-20 mb-9'>
                   <p className='text-[0.92rem] text-center h-19 mx-3 mt-2'>{testimony.depoimento}</p>
                   <h3 className='font-semibold ' >{testimony.nome}</h3>
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
   
