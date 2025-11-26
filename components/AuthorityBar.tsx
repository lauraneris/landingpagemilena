"use client";

import { motion } from "framer-motion";
import { p } from "framer-motion/client";
import { Trophy, TrendingUp, Target, Zap } from "lucide-react";

const principles = [
  {
    icon: Target,
    title: "Estratégia ",
    description: "Campanhas só sobem com objetivo claro e métrica de sucesso definida.",
  },
  {
    icon: Zap,
    title: "Execução enxuta",
    description: "Menos ruído, mais campanhas que fazem sentido para o momento do negócio.",
  },
  {
    icon: Trophy,
    title: "Clareza",
    description: "Você entende o que está rodando, o porquê e o que estamos buscando em cada teste.",
  },
  {
    icon: TrendingUp,
    title: "Resultado, não milagre",
    description: "Não são multiplicadores mágicos. Construímos previsibilidade junto com você.",
  },
];

export function AuthorityBar() {
  return (
    <section className="relative py-12 bg-[#0a0a0a] border-y border-[#5a14c0]/20">
      <div className="absolute inset-0 halftone-pattern-dense opacity-10" />

      <div className="relative z-10 container flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-md space-y-2">
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.22em] text-[#b8c709]">
            Princípios que sustentam a parceria
          </h2>
         
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full lg:w-auto"
        >
          {principles.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-1 bg-[#050505] border border-[#5a14c0]/30 rounded-2xl px-4 py-3 hover:border-[#b8c709]/60"
            >
              <div className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-[#b8c709]" />
                <span className="font-semibold text-xs sm:text-sm">
                  {item.title}
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-[#cbcbcb]">
                {item.description}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
