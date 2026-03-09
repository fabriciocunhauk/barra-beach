"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Container from "./Container";
import Card from "./Card";
import Button from "./Button";

const WHATSAPP_NUMBER = "62995081288";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de reservar uma quadra ou saber mais sobre a Barra Beach Arena.`;

const modalities = [
  {
    title: "Futevôlei",
    tag: "O Clássico",
    img: "/voley-de-areia.png",
  },
  {
    title: "Beach Tennis",
    tag: "Sensação",
    img: "/time.png",
  },
  {
    title: "Vôlei de Areia",
    tag: "Energia",
    img: "/campeonato.png",
  },
];

const Modalities = () => {
  return (
    <section id="modalities" className="py-24 bg-white">
      <Container size="lg" className="text-center mb-16">
        <span className="text-beach-sunset font-black uppercase tracking-[0.3em] text-sm mb-4 block">Esportes</span>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">As Melhores Quadras.</h2>
        <p className="text-slate-500 text-xl max-w-2xl mx-auto font-medium">
          Areia tratada, iluminação profissional e a melhor infraestrutura de Nerópolis.
        </p>
      </Container>

      <Container size="lg" classes={{ container: "grid md:grid-cols-3 gap-12" }}>
        {modalities.map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card variant="image" className="h-[500px] relative overflow-hidden group">
              <Image 
                src={item.img} 
                alt={item.title} 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <span className="bg-beach-sunset text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">
                  {item.tag}
                </span>
                <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-4">{item.title}</h3>
                <Button 
                    variant="white" 
                    size="sm" 
                    link={WHATSAPP_LINK}
                    className="inline-block"
                >
                  Reservar
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </Container>
    </section>
  );
};

export default Modalities;
