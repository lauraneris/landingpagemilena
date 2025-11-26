// components/differentials/DifferentialsHero.tsx
"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/lib/brand";
import { BrandIcon } from "@/components/BrandIcon";

export function DifferentialsHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 halftone-pattern opacity-25" />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 25% 30%, #5a14c0 0%, transparent 55%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 80% 80%, #ffb380 0%, transparent 60%)",
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
            Diferenciais {BRAND.shortName}
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            <span className="gradient-text block">
              Não é só o que fazemos.
            </span>
            <span className="text-white block mt-2">
              É como pensamos cada movimento.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#cbcbcb]">
            A Purple nasceu para ser o oposto do marketing genérico: nada de
            campanhas jogadas no ar, relatórios confusos e “depois a gente vê”.
            Aqui, cada ação é amarrada a um raciocínio claro — e você participa
            desse raciocínio.
          </p>

          <p className="text-sm sm:text-base text-[#cbcbcb]">
            Nossos diferenciais não são slogans. São compromissos práticos sobre
            como conduzimos estratégia, mídia, automação e relacionamento com
            cada cliente.
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
              <BrandIcon
                name="p03ElementosTabuleiroTabuleiro2Png"
                alt="Tabuleiro Purple"
                className="w-full max-w-[260px] h-auto object-contain"
              />
              <p className="text-xs sm:text-sm text-[#cbcbcb] text-center max-w-xs">
                Assim como no xadrez, nossos diferenciais estão na sequência dos
                movimentos — não em uma jogada isolada.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
