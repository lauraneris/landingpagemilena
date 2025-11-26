// components/differentials/DifferentialsCta.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

export function DifferentialsCta() {
  const whatsappHref = `https://wa.me/${BRAND.contact.phoneRaw}?text=${encodeURIComponent(
    "Olá, vi os diferenciais da Purple e quero entender como eles se aplicam ao meu negócio."
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
              Próximo lance
            </p>
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              Quer trazer esses diferenciais para o seu dia a dia?
            </h3>
            <p className="text-xs sm:text-sm text-[#cbcbcb]">
              Vamos olhar o seu cenário e mapear quais movimentos fazem mais
              sentido agora. A ideia é construir um plano sob medida, e não
              encaixar você em um modelo genérico.
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
            Falar sobre meus diferenciais
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
