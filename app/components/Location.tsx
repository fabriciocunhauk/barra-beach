"use client";

import React from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

import { WHATSAPP_LINK } from "@/app/utils/constants";

const Location = () => {
  return (
    <section id="location" className="py-24 bg-beach-sand">
      <Container size="lg" classes={{ container: "px-4 sm:px-6 lg:px-8" }}>
        <div className="bg-white rounded-[64px] overflow-hidden shadow-2xl border border-slate-100">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 md:p-20">
              <span className="text-beach-sunset font-black uppercase tracking-[0.3em] text-sm mb-6 block">Visite-nos</span>
              <h2 className="text-5xl font-black text-slate-900 mb-12 tracking-tighter uppercase italic">No Coração de Nerópolis.</h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <MapPin className="text-beach-sunset shrink-0" size={32} />
                  <div>
                    <h4 className="font-black text-slate-900 uppercase tracking-tighter text-lg">Endereço</h4>
                    <p className="text-slate-500 font-medium">Av. João Milton Ramos, Nerópolis - GO</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Clock className="text-beach-ocean shrink-0" size={32} />
                  <div>
                    <h4 className="font-black text-slate-900 uppercase tracking-tighter text-lg">Horário</h4>
                    <p className="text-slate-500 font-medium">Todos os dias: 08:00 às 23:30</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Phone className="text-beach-accent shrink-0" size={32} />
                  <div>
                    <h4 className="font-black text-slate-900 uppercase tracking-tighter text-lg">Contato</h4>
                    <p className="text-slate-500 font-medium">+55 62 99508-1288</p>
                  </div>
                </div>
              </div>

              <Button 
                variant="dark" 
                size="lg" 
                link={WHATSAPP_LINK}
                className="mt-12 w-full rounded-3xl py-6"
              >
                Falar com Atendente
              </Button>
            </div>
            <div className="h-[500px] lg:h-auto relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.715367355416!2d-49.2233089!3d-16.4209797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e853301e309d3%3A0x6e205242baac8d67!2sBarra%20Beach%20Arena!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Location;
