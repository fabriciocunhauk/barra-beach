"use client";

import React from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Button from "./Button";

const WHATSAPP_NUMBER = "62995081288";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de reservar uma quadra ou saber mais sobre a Barra Beach Arena.`;
const INSTAGRAM_HANDLE = "barrabeacharena";
const INSTAGRAM_LINK = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

const images = [
  {id:0, img: "/barra-beach-restaurant.jpeg", alt: "Barra Beach Vibe"},
  {id:1, img: "/time.png", alt: "Barra Beach Vibe"},
  {id:2, img: "/voley-de-areia.png", alt: "Barra Beach Vibe"},
];

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/barra-beach-restaurant-front.jpeg" 
          alt="Barra Beach Vibe" 
          fill
          priority
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-beach-sand via-black/40 to-black/60"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 leading-[0.85] tracking-tighter uppercase italic mt-40 lg:mt-0">
            Esporte, <br />
            <span className="text-beach-sunset">Sabor & Sol.</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-bold tracking-tight">
            Quadras de Areia • Piscina Semi Olímpica • Gastrobar Completo • Música ao Vivo
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
                link={WHATSAPP_LINK} 
                variant="primary" 
                size="lg" 
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-6"
            >
              Alugar Quadra <ChevronRight size={24} />
            </Button>
            <Button 
                link="#gastrobar" 
                variant="ghost" 
                size="lg" 
                className="w-full sm:w-auto px-12 py-6"
            >
              Conhecer Gastrobar
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Social Proof / Instagram Vibe */}
      <div className="absolute bottom-12 left-0 right-0 z-10 hidden lg:block">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-end">
          <div className="flex gap-4">
            {images.map(({id,img,alt}) => (
              <div key={id} className="w-16 h-16 rounded-2xl border-2 border-white/50 overflow-hidden rotate-6 hover:rotate-0 transition-transform relative">
                <Image 
                  src={img} 
                  alt={alt} 
                  fill
                  className="object-cover" 
                />
              </div>
            ))}
          </div>
          <div className="text-white text-right">
            <p className="text-xs font-black uppercase tracking-[0.3em] opacity-60 mb-2">Siga no Instagram</p>
            <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="text-2xl font-black hover:text-beach-sunset transition-colors">@{INSTAGRAM_HANDLE}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
