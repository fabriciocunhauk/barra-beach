"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Utensils, Beer, Waves, Music, Clock } from "lucide-react";
import Container from "./Container";

const Gastrobar = () => {
  return (
    <section id="gastrobar" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-beach-sunset/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-beach-ocean/5 blur-[100px] rounded-full"></div>
      
      <Container size="lg" classes={{ container: "px-4 sm:px-6 lg:px-8" }}>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-beach-sunset font-black uppercase tracking-[0.3em] text-sm mb-6 block">Gastronomia & Lazer</span>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
              O Melhor <br />
              <span className="text-beach-sunset">Pós-Jogo</span> <br />
              da Região.
            </h2>
            <p className="text-slate-400 text-xl mb-10 leading-relaxed font-medium">
              Não é só sobre esporte. É sobre o churrasco com os amigos, o chopp trincando na caneca congelada e aquela porção de picanha que só a Barra Beach tem. 
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-12">
              {[
                { icon: <Utensils size={20} />, title: "Gastrobar", desc: "Cozinha completa" },
                { icon: <Beer size={20} />, title: "Chopp", desc: "Caneca zero grau" },
                { icon: <Waves size={20} />, title: "Piscina", desc: "Semi Olímpica" },
                { icon: <Music size={20} />, title: "Eventos", desc: "Música ao vivo" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-beach-sunset">{item.icon}</div>
                  <div>
                    <h4 className="font-black text-white uppercase tracking-tighter text-sm">{item.title}</h4>
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-gradient-to-br from-beach-sunset/20 to-beach-accent/20 rounded-[32px] border border-white/10 backdrop-blur-md">
              <h4 className="font-black text-white uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                <Clock size={16} className="text-beach-sunset" /> Horário de Funcionamento
              </h4>
              <p className="text-slate-300 text-sm font-medium">Estamos abertos todos os dias, das <span className="text-white font-bold">08:00 às 23:30</span>. Venha aproveitar o dia todo!</p>
            </div>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="h-72 rounded-[40px] overflow-hidden border-2 border-white/10 relative">
                  <Image src="/caipirinha-de-morango.png" alt="Drink de Morando" fill className="object-cover" />
                </div>
                <div className="h-56 rounded-[40px] overflow-hidden border-2 border-white/10 relative">
                  <Image src="/chopp.png" alt="Caipirinha de Limão" fill className="object-cover" />
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4 pt-12"
              >
                <div className="h-56 rounded-[40px] overflow-hidden border-2 border-white/10 relative">
                  <Image src="/porcao.png"  alt="Drink de Maracujá" fill className="object-cover" />
                </div>
                <div className="h-72 rounded-[40px] overflow-hidden border-2 border-white/10 relative">
                  <Image src="/chopp-gelado.png" alt="Porção Barra Beach" fill className="object-cover" />
                </div>
              </motion.div>
            </div>
            {/* Floating Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-beach-sunset rounded-full flex flex-col items-center justify-center text-white shadow-2xl border-4 border-slate-900 rotate-12">
              <span className="text-xs font-black uppercase tracking-widest">Chopp</span>
              <span className="text-2xl font-black italic tracking-tighter">GELADO</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Gastrobar;
