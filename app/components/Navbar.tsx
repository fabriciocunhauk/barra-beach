"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Container from "./Container";
import Button from "./Button";

import Image from "next/image";

import { WHATSAPP_LINK } from "@/app/utils/constants";

const navLinks = [
  { name: "Início", href: "#home" },
  { name: "Esportes", href: "#modalities" },
  { name: "Gastrobar", href: "#gastrobar" },
  { name: "Localização", href: "#location" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-beach-ocean/10">
      <Container size="lg" classes={{ container: "py-0 px-4 sm:px-6 lg:px-8" }}>
        <div className="flex justify-between items-center h-20">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full shadow-lg overflow-hidden">
                <Image 
                  src="/barra-beach-logo.png" 
                  alt="Barra Beach Arena Logo" 
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black tracking-tighter text-slate-800 uppercase">
                Barra Beach
              </span>
              <span className="text-[10px] font-bold text-beach-sunset tracking-[0.2em] uppercase">
                Arena & Gastrobar
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-beach-sunset transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant="primary" 
              size="sm" 
              link={WHATSAPP_LINK}
            >
              Reservar
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </Container>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-4 py-8 flex flex-col gap-4 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-black text-slate-800 px-4 py-3 hover:bg-beach-sand rounded-2xl uppercase tracking-tighter"
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="primary"
            size="lg"
            link={WHATSAPP_LINK}
            className="w-full py-5 mt-4"
          >
            Reservar Agora
          </Button>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
