// components/about/AboutProcess.tsx
"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/lib/brand";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    label: "1. Diagnóstico estratégico",
    description:
      "Lemos o cenário: funil atual, histórico de mídia, operação, ticket, margem e gargalos mais críticos.",
  },
  {
    label: "2. Plano de movimentos",
    description:
      "Desenhamos a ordem dos lances: quais canais, quais ofertas, quais mensagens e o que queremos provar em cada teste.",
  },
  {
    label: "3. Primeiros ciclos de teste",
    description:
      "Rodamos campanhas com hipóteses claras. Medimos, aprendemos rápido e tomamos decisões com base em dados + contexto.",
  },
  {
    label: "4. Consolidação e escala",
    description:
      "A partir do que funciona, consolidamos o playbook da sua operação e buscamos previsibilidade, não apenas picos.",
  },
];

export function AboutProcess() {
  return (
    <section className="relative py-20 bg-black">
      <div className="absolute inset-0 halftone-pattern opacity-5" />

      <div className="relative z-10 container space-y-10">
        <div className="max-w-2xl">
          <h2 className="text-sm uppercase tracking-[0.22em] text-[#b8c709] mb-3">
            Como trabalhamos na prática
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold text-white mb-3">
            Do primeiro diagnóstico ao plano de longo prazo.
          </p>
          <p className="text-sm sm:text-base text-[#cbcbcb]">
            Nosso objetivo é tirar o marketing do modo “apaga incêndio” e colocar
            em um trilho onde cada ação tem um porquê. Nada começa sem alinharmos
            juntos o que é sucesso para o seu momento.
          </p>
        </div>

        <div className="grid gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="relative flex gap-4 rounded-2xl border border-[#5a14c0]/30 bg-[#050505]/80 px-4 py-4"
            >
              <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#5a14c0]/20 text-[11px] font-semibold text-[#b8c709]">
                {index + 1}
              </div>
              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-semibold text-white">
                  {step.label}
                </p>
                <p className="text-xs sm:text-sm text-[#cbcbcb]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="flex items-center gap-2 text-[11px] sm:text-xs text-[#777]">
          <ArrowRight className="w-3 h-3" />
          O objetivo é que você tenha clareza do plano e segurança para investir,
          mesmo sendo o começo da jornada da {BRAND.shortName}.
        </p>
      </div>
    </section>
  );
}
