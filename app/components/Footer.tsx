"use client";

import React from "react";
import { 
  MapPin, 
  Clock, 
  Phone, 
  Instagram, 
  MessageCircle, 
  MessagesSquare
} from "lucide-react";
import Image from "next/image";
import Container from "./Container";

const WHATSAPP_NUMBER = "62995081288";
const INSTAGRAM_HANDLE = "barrabeacharena";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de reservar uma quadra ou saber mais sobre a Barra Beach Arena.`;
const INSTAGRAM_LINK = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

const navLinks = [
  { name: "Início", href: "#home" },
  { name: "Esportes", href: "#modalities" },
  { name: "Gastrobar", href: "#gastrobar" },
  { name: "Localização", href: "#location" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-beach-sunset/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-beach-ocean/5 blur-[120px] rounded-full"></div>

      <Container size="lg" classes={{ container: "relative z-10 px-4 sm:px-6 lg:px-8" }}>
        {/* Pre-footer CTA */}
        <div className="bg-gradient-to-r from-beach-sunset to-beach-accent rounded-[40px] p-8 md:p-16 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-4">Pronto para o Jogo?</h3>
            <p className="text-white/80 font-bold uppercase tracking-widest text-sm">Reserve sua quadra agora e venha viver essa experiência.</p>
          </div>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-slate-900 px-12 py-6 rounded-2xl font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
          >
            Reservar Agora
          </a>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Column 1: Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg border-2 border-beach-sunset/20">
                <Image 
                  src="/barra-beach-logo.png" 
                  alt="Barra Beach Arena Logo" 
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black uppercase tracking-tighter">Barra Beach</span>
                <span className="text-[10px] font-bold text-beach-sunset tracking-[0.2em] uppercase">Arena & Gastrobar</span>
              </div>
            </div>
            <p className="text-slate-400 font-medium leading-relaxed mb-8">
              O melhor complexo de esportes de areia, lazer e gastronomia de Nerópolis. Onde o esporte encontra o sabor.
            </p>
            <div className="flex gap-4">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-beach-sunset hover:border-beach-sunset transition-all">
                <Instagram size={20} />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-black uppercase italic tracking-tighter mb-8 text-beach-sunset">Navegação</h4>
            <ul className="space-y-4 text-center md:text-left">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white font-bold uppercase tracking-widest text-xs transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white font-bold uppercase tracking-widest text-xs transition-colors">
                  Reservas
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-black uppercase italic tracking-tighter mb-8 text-beach-ocean">Contato</h4>
            <ul className="space-y-6 text-center md:text-left">
              <li className="flex flex-col md:flex-row items-center gap-3">
                <MapPin size={16} className="text-beach-sunset" />
                <span className="text-slate-400 text-sm font-medium">Av. João Milton Ramos, Nerópolis - GO</span>
              </li>
              <li className="flex flex-col md:flex-row items-center gap-3">
                <Phone size={16} className="text-beach-ocean" />
                <span className="text-slate-400 text-sm font-medium">+55 62 99508-1288</span>
              </li>
              <li className="flex flex-col md:flex-row items-center gap-3">
                <Clock size={16} className="text-beach-accent" />
                <span className="text-slate-400 text-sm font-medium">Todos os dias: 08:00 - 23:30</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter/CTA */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-black uppercase italic tracking-tighter mb-8 text-beach-accent">Novidades</h4>
            <p className="text-slate-400 text-sm font-medium mb-6 text-center md:text-left">
              Fique por dentro de torneios, eventos e promoções exclusivas.
            </p>
            <a 
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-white/5 border border-white/10 py-4 rounded-2xl text-center font-black uppercase tracking-widest text-xs hover:bg-white hover:text-slate-900 transition-all"
            >
              Seguir no Instagram
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Barra Beach Arena • Nerópolis - GO
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-600 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">Privacidade</a>
            <a href="#" className="text-slate-600 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">Termos</a>
          </div>
        </div>
      </Container>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      >
        <MessagesSquare size={32} />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-6 py-3 rounded-2xl text-sm font-black uppercase tracking-widest shadow-2xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none translate-x-4 group-hover:translate-x-0">
          Reservar Agora!
        </span>
      </a>
    </footer>
  );
};

export default Footer;
