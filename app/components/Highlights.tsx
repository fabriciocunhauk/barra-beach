"use client";

import Image from "next/image";
import { motion } from "motion/react";

const highlights = [
  { label: "Porções", img: "/porcao.png" },
  { label: "Chopp", img: "/chopp.png" },
  { label: "Drinks", img: "/caipirinha-bar.png" },
  { label: "Piscina", img: "/piscina.png" },
  { label: "Vôlei", img: "/voley-de-areia.png" },
  { label: "Futevôlei", img: "/time.png" },
];

const Highlights = () => {
  return (
    <section className="bg-beach-sand py-8 border-b border-slate-200 overflow-x-auto scrollbar-hide">
      <div className="max-w-7xl mx-auto px-4 flex justify-start md:justify-center gap-6 md:gap-12 min-w-max">
        {highlights.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full p-1 border-2 border-beach-sunset group-hover:border-beach-ocean transition-colors">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white relative">
                <Image 
                  src={item.img} 
                  alt={item.label} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform" 
                />
              </div>
            </div>
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-600 group-hover:text-beach-sunset transition-colors">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
