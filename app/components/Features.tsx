"use client";

import React from "react";
import { motion } from "motion/react";
import { Waves, Utensils, Music, Beer } from "lucide-react";
import Container from "./Container";
import Card from "./Card";

const features = [
  { icon: <Waves className="text-beach-ocean" size={24} />, label: "Piscina Semi Olímpica", sub: "Lazer & Treino" },
  { icon: <Utensils className="text-beach-sunset" size={24} />, label: "Gastrobar", sub: "Porções & Carnes" },
  { icon: <Beer className="text-amber-500" size={24} />, label: "Chopp Gelado", sub: "Trincando" },
  { icon: <Music className="text-beach-accent" size={24} />, label: "Música ao Vivo", sub: "Vibe Inesquecível" },
];

const Features = () => {
  return (
    <section className="py-20 bg-beach-sand">
      <Container size="lg" classes={{ container: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8" }}>
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card variant="feature">
              <div className="mb-4 p-4 rounded-2xl bg-slate-50 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-black text-slate-800 uppercase tracking-tighter leading-none mb-1">{item.label}</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.sub}</p>
            </Card>
          </motion.div>
        ))}
      </Container>
    </section>
  );
};

export default Features;
