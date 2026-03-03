"use client";
import { useState } from "react";
import CardServicos from "./CardServicos";

const images = [
    "https://ik.imagekit.io/gabrielySchiller/Clinica%20ondontologica/clinica.png",
    "",
    "",
    "",
    "",
]


export default function Carrousel(){
    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prev = () => {
        setIndex((prev) => prev === 0 ? images.length - 1 : prev - 1);
    };

    return(
        <div className="relative flex gap-3 justify-center w-full max-w-4xl mx-auto">
            <button onClick={prev} className="rounded-full w-10" >
                <img src="https://ik.imagekit.io/gabrielySchiller/Clinica%20ondontologica/icons8-seta-esquerda-100.png" alt="passar para esquerda"/>
            </button>
            
            <img className="w-60 rounded-md" src={images[index]} alt="card" />
            <img className="w-60 rounded-md" src={images[index]} alt="card" />
            
            <button onClick={next} className=" rounded-full w-10 ">
                <img src="https://ik.imagekit.io/gabrielySchiller/Clinica%20ondontologica/icons8-seta-direita-100.png" alt="passar para direita"/> 
            </button>
            
        </div>
    )
}