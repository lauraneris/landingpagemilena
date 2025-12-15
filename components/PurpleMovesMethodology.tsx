// components/PurpleMovesMethodology.tsx
"use client";

import { motion } from "framer-motion";
import { Brain, Workflow, Gauge, Repeat } from "lucide-react";

const moves = [
  {
    icon: Brain,
    title: "Diagnóstico estratégico",
    description:
      "Entendemos seu momento, oferta, funil, operação e metas de negócio antes de sugerir qualquer campanha ou canal.",
  },
  {
    icon: Workflow,
    title: "Desenho de fluxo",
    description:
      "Organizamos a jornada: anúncios, páginas, mensagens, automações e follow-ups trabalhando como um sistema único.",
  },
  {
    icon: Gauge,
    title: "Testes e leitura rápida",
    description:
      "Primeiros ciclos focados em aprender rápido: quais criativos, públicos e mensagens realmente movem a agulha.",
  },
  {
    icon: Repeat,
    title: "Otimização contínua",
    description:
      "Ajustes recorrentes, regras automatizadas e revisões estratégicas para manter as campanhas sempre em evolução.",
  },
];

export function PurpleMovesMethodology() {
  return (
    <section className="relative py-20 bg-[#050505] border-y border-[#5a14c0]/20">
      <div className="absolute inset-0 halftone-pattern opacity-6" />

      <div className="relative z-10 container space-y-10">
        <div className="max-w-2xl">
          <h2 className="text-sm uppercase tracking-[0.22em] text-[#b8c709] mb-3">
            Purple Moves Methodology
          </h2>
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Um método para tirar o marketing do modo aleatório e alavancar seu negócio.
          </h3>
          <p className="text-sm sm:text-base text-[#cbcbcb]">
            Em vez de apostas soltas, trabalhamos com uma sequência clara de
            movimentos. Cada etapa existe para alimentar a próxima, do anúncio
            à recorrência de compra.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {moves.map((move, index) => {
            const Icon = move.icon;
            return (
              <motion.div
                key={move.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-3xl border border-[#5a14c0]/35 bg-gradient-to-b from-[#111] to-[#050505] p-5 space-y-3 group overflow-hidden relative"
              >
                <div className="w-9 h-9 rounded-2xl bg-[#5a14c0]/25 flex items-center justify-center mb-1">
                  <Icon className="w-4 h-4 text-[#b8c709]" />
                </div>
                <h4 className="text-sm font-semibold text-white group-hover:text-[#b8c709]">
                  {move.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#cbcbcb] leading-relaxed">
                  {move.description}
                </p>

                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#5a14c0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
