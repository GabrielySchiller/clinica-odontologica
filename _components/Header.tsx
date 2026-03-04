
import Image from 'next/image'
import Logo from "../public/logo.png"

export default function Header() {
  return (
    <header className="bg-[#597f8b]  flex items-center justify-between md:py-0 py-4 px-4">
          <div className="pr-5">
            <Image
             src={Logo}
             alt="Logo da clinica"
             width={120}
             height={120}
             className="object-contain"
            />
          </div>

           <div className="flex items-center text-white font-bold  gap-6 md:pr-10">
              <a href='#servicos' className="hover:scale-[1.15] p-2 hover:border-b bottom-1 "> Serviços </a>
              <a href='#equipe' className="hover:scale-[1.15] p-2 hover:border-b bottom-1  "> Equipe </a>
              <a href="https://wa.me/" target="blank" className='text-black hover:text-white bg-white hover:bg-[#3a5a65] px-3 py-2 rounded-md'> WhatsApp </a>
           </div>
      </header>
  )
}
