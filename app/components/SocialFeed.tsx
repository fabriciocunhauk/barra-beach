"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Instagram } from "lucide-react";
import Container from "./Container";

const INSTAGRAM_HANDLE = "barrabeacharena";
const INSTAGRAM_LINK = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

const posts = [
  { img: "/gastrobar.png", type: "sports" },
  { img: "/chopp.png", type: "beer" },
  { img: "/caipirinha-bar.png", type: "drink" },
  { img: "/comida.png", type: "/food" },
  { img: "/saque.png", type: "sports" },
  { img: "/caipirinha-de-maracuja.png", type: "drink" },
  { img: "/porcao.png", type: "food" },
  { img: "/campeonato.png", type: "vibe" },
];

const SocialFeed = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container size="lg" classes={{ container: "px-4 sm:px-6 lg:px-8" }}>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-beach-ocean font-black uppercase tracking-[0.3em] text-sm mb-4 block">Social Feed</span>
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase italic">Vibe Barra Beach.</h2>
          </div>
          <a 
            href={INSTAGRAM_LINK} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-3 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl hover:scale-105 transition-all"
          >
            <Instagram size={20} /> Siga @{INSTAGRAM_HANDLE}
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="aspect-square relative group overflow-hidden rounded-2xl md:rounded-[32px] cursor-pointer"
            >
              <Image 
                src={post.img} 
                alt="Instagram Post" 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white" size={32} />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SocialFeed;
