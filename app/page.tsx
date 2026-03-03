import Image from "next/image";
import Header from "@/_components/Header";
import CardServicos from "@/_components/CardServicos";
import CardEquipe from "@/_components/CardEquipe";
import Home from "@/_components/Home";
import Diferenciais from "@/_components/Diferenciais";
import Depoimentos from "@/_components/Depoimentos";
import Carrousel from "@/_components/Carrousel";
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
          
          


      <section className=" flex justify-center  py-15 px-4 bg-[#88aebb] flex-wrap">
            <Carrousel/>
      </section>
          
    


      <section className="bg-white w-full  px-4 lg:px-10 py-35 lg:flex gap-5 justify-center">
         <CardEquipe/>
       </section>


       <section >
          <Diferenciais/>
       </section>

       <section>
        <Depoimentos/>
       </section>



      <footer className="bg-[#597f8b] text-white flex items-center flex-col justify-center py-4">
         <Footer/>
      </footer>
    </div>
  );
}
