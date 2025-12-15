// components/about/AboutFinalCta.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

export function AboutFinalCta() {
  const whatsappHref = `https://wa.me/${BRAND.contact.phoneRaw}?text=${encodeURIComponent(
    "Olá, vi a página Sobre Nós da Purple e quero entender como podemos trabalhar juntos."
  )}`;

  return (
    <section className="relative py-16 bg-[#050505] border-t border-[#5a14c0]/30">
      <div className="absolute inset-0 halftone-pattern opacity-10" />

      <div className="relative z-10 container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-[#5a14c0]/50 bg-gradient-to-r from-[#141414] via-[#050505] to-[#141414] px-6 py-8 sm:px-10 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-6 neon-glow"
        >
          <div className="space-y-2 max-w-xl">
            <p className="text-xs sm:text-sm uppercase tracking-[0.22em] text-[#b8c709]">
              Próximo movimento
            </p>
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              Quer tirar seu marketing do modo aleatório?
            </h3>
            <p className="text-xs sm:text-sm text-[#cbcbcb]">
              Vamos olhar o seu cenário juntos e desenhar os primeiros movimentos.
              Sem compromisso prévio, sem promessa vazia, só uma conversa franca
              sobre o que faz sentido para o seu momento.
            </p>
          </div>

          <Button
            as="a"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="bg-[#b8c709] hover:bg-[#a0b308] text-black border-none neon-glow neon-glow-hover group"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Falar com a Purple
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
