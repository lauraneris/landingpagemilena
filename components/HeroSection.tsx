"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { BRAND } from "@/lib/brand";
import { BrandIcon } from "./BrandIcon";

export function HeroSection() {
  const whatsappHref = `https://wa.me/${BRAND.contact.phoneRaw}?text=${encodeURIComponent(
    "Olá, quero agendar meu primeiro lance estratégico com a Purple."
  )}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Halftone + gradientes de fundo */}
      <div className="absolute inset-0 halftone-pattern opacity-30" />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, #5a14c0 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 70% 20%, #ffb380 0%, transparent 55%)",
        }}
      />

      {/* Conteúdo principal */}
      <div className="relative z-10 container flex flex-col lg:flex-row items-center gap-12 py-20">
        {/* Coluna esquerda: texto + CTA */}
        <div className="flex-1 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge com rainha-4.png */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#5a14c0] bg-[#5a14c0]/10"
            >
              <BrandIcon
                name="p03ElementosRainhaRainha4Png"
                size={18}
                alt="Rainha Purple"
                className="shrink-0"
              />
              <span className="text-xs sm:text-sm text-[#cbcbcb]">
                {BRAND.tagline}
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="relative text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
              <span className="gradient-text block">
                NOT JUST MOVES. PURPLE MOVES
              </span>

              <span className="text-white block mt-2">
                Inteligência em marketing
              </span>
            </h1>

            {/* Espaço visual antes dos CTAs */}
            <div className="h-4" />

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Botão principal -> WhatsApp */}
              <Button
  as="a"
  href={whatsappHref}
  target="_blank"
  rel="noopener noreferrer"
  size="lg"
  className="bg-[#b8c709] hover:bg-[#a0b308] text-black border-none neon-glow neon-glow-hover group"
>
  {BRAND.primaryCtaLabel}
  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
</Button>

             
            </div>
          </motion.div>
        </div>

        {/* Coluna direita: card com imagem peças-2.png */}
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative w-full max-w-md"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#5a14c0]/40 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#ffb380]/40 blur-3xl rounded-full" />

            <div className="relative rounded-3xl border border-[#5a14c0]/40 bg-gradient-to-b from-[#141414] to-[#050505] p-6 flex flex-col items-center justify-center neon-glow overflow-hidden">
              <BrandIcon
                name="p02ItensPecoas2Png"
                alt="Peças de xadrez da identidade visual"
                className="w-full h-auto max-w-[260px] object-contain"
              />

              <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full text-xs sm:text-sm text-[#cbcbcb]">
                <div className="flex-1">
                
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#5a14c0] rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-[#b8c709] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
