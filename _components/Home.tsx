import React from 'react'
import Image from 'next/image';

export default function Home() {
  return (
     <div data-aos="fade-right" className="  mx-7 flex items-center md:justify-between justify-center w-14 " >
              
              <div className=" bg-[#88aebb] gap-4   shadow-lg text-white md:ml-15 rounded-md py-14 px-7 flex flex-col justify-center items-center">
                 <h2 className="text-2xl font-bold text-justify">Cuidando do sorriso de toda a sua família</h2>
                 <p className="text-center font-normal text-[1.12rem]">Tratamentos completos com uma equipe de especialistas</p>
                 
                 <div className="py-2 w-60">
                    <a className="bg-[#597f8b] flex gap-2 justify-center items-center shadow-md  font-semibold text-white px-4 py-2 rounded-md  text-center mt-4 hover:bg-[#3a5a65]" href="https://wa.me/">
                      Agendar Consulta  
                      <img className='w-5' src="https://ik.imagekit.io/gabrielySchiller/icons/whatsapp.png?updatedAt=1749681847185" alt="" />
                      </a>
                 </div>
    
              </div>
    
      </div>
             
               
              
    
  )
}

