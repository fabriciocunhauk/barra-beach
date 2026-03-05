"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Instagram } from "lucide-react";
import Container from "./Container";

const INSTAGRAM_HANDLE = "barrabeacharena";
const INSTAGRAM_LINK = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

const posts = [
  { img: "https://images.unsplash.com/photo-1519766304817-4f37bda74a26?auto=format&fit=crop&w=400&q=80", type: "sports" },
  { img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=400&q=80", type: "beer" },
  { img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=400&q=80", type: "food" },
  { img: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?auto=format&fit=crop&w=400&q=80", type: "sports" },
  { img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=400&q=80", type: "drink" },
  { img: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=400&q=80", type: "sports" },
  { img: "https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&w=400&q=80", type: "food" },
  { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80", type: "vibe" },
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
