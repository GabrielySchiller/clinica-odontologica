
import Header from "@/_components/Header";
import CardServicos from "@/_components/CardServicos";
import CardEquipe from "@/_components/CardEquipe";
import Home from "@/_components/Home";
import Diferenciais from "@/_components/Diferenciais";
import CardDepoimentos from "@/_components/CardDepoimentos";
import Footer from "@/_components/Footer";



export default function Body() {
  return (
    <div className="bg-white h-full w-full">
      
      
      <Header/>

      
      
       <section className="w-full flex justify-center md:justify-between items-center bg-left  bg-cover md:bg-center h-130 " 
          style={{
            backgroundImage: "url('https://ik.imagekit.io/gabrielySchiller/Clinica%20ondontologica/home41.png') ",
           }} 
        >
        
          <Home/>
      </section>
          
          


      <section id="servicos" className=" flex justify-center items-center flex-col  py-15 px-4 bg-[#88aebb] flex-wrap">
           <div className="flex justify-center mb-10">
            <h2 className="text-[1.8rem] font-bold text-white">Nossos serviços</h2>
          </div>

            <CardServicos/>
      </section>
          
    


      <section id="equipe" className="bg-[#f5f5f5] w-full  px-4 lg:px-10 py-25 flex gap-5 flex-col justify-center">
          <div className="flex justify-center mb-10">
            <h2 className="text-[2rem] font-bold text-[#88aebb]">Nossa equipe</h2>
          </div>
         
         <CardEquipe/>

       </section>


       <section className="mt-20">
        <div className="flex justify-center mb-10">
            <h2 className="text-[2rem] font-bold text-[#88aebb]">Nossos Diferenciais</h2>
          </div>
          <Diferenciais/>
       </section>

      
       <section className=" bg-[#88aebb] pt-10 pb-10 flex flex-col justify-center items-center">
        <div className="flex justify-center mb-10">
            <h2 className="md:text-[1.8rem] text-[1.4rem] font-bold text-white">Depoimentos dos nossos pacientes</h2>
          </div>
        <CardDepoimentos/>
       </section>



      <footer className="bg-[#40616b] text-white flex items-center flex-col justify-center py-4">
         <Footer/>
      </footer>
    </div>
  );
}
