// components/about/AboutHero.tsx
"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/lib/brand";
import { BrandIcon } from "@/components/BrandIcon";

export function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 halftone-pattern opacity-25" />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, #5a14c0 0%, transparent 55%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 80% 70%, #ffb380 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 container py-20 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 max-w-xl space-y-6"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.22em] text-[#b8c709]">
            Sobre a {BRAND.shortName}
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            <span className="gradient-text block">
              Uma agência pensada como um jogo de xadrez.
            </span>
            <span className="text-white block mt-2">
              Cada movimento existe para preparar o próximo.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#cbcbcb]">
            A Purple nasceu da inquietação com o marketing “no automático”.  
            Em vez de campanhas soltas, pensamos em sistemas: sequências de
            movimentos que conectam atenção, desejo e receita em um plano só.
          </p>

          <p className="text-sm sm:text-base text-[#cbcbcb]">
            Somos obcecados por clareza. O nosso trabalho só faz sentido se
            você entende o que está acontecendo, por que está acontecendo
            e qual o próximo passo após cada campanha.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex-1 flex justify-center lg:justify-end w-full"
        >
          <div className="relative w-full max-w-md">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#5a14c0]/40 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -right-6 w-32 h-32 bg-[#ffb380]/40 blur-3xl rounded-full" />

            <div className="relative rounded-3xl border border-[#5a14c0]/40 bg-gradient-to-b from-[#141414] to-[#050505] p-6 flex flex-col items-center justify-center neon-glow overflow-hidden gap-4">
              {/* AQUI trocamos para logo-chrome.png */}
              <BrandIcon
                name="p02ItensLogochromePng"
                alt={`${BRAND.name} logo chrome`}
                className="w-40 h-auto object-contain"
              />

              <p className="text-xs sm:text-sm text-[#cbcbcb] text-center max-w-xs">
                {BRAND.description}
              </p>
              <p className="text-[11px] sm:text-xs text-[#777] text-center max-w-xs">
                Nosso símbolo é o xadrez, mas o foco é uma coisa só: fazer seu
                marketing trabalhar pelo lucro, e não pelo ego.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
