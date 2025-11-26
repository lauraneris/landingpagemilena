// components/differentials/DifferentialsComparative.tsx
"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/lib/brand";

const rows = [
  {
    label: "Ponto de partida",
    generic: "Começa escolhendo canais e criativos.",
    purple: "Começamos entendendo o negócio e definindo objetivos.",
  },
  {
    label: "Visão de campanhas",
    generic: "Campanhas isoladas e difíceis de conectar.",
    purple: "Campanhas vistas como uma sequência de movimentos.",
  },
  {
    label: "Nível de transparência",
    generic: "Relatórios superficiais e linguagem confusa.",
    purple: "Relatórios em linguagem simples e contexto de negócio.",
  },
  {
    label: "Uso de automações",
    generic: "Ferramentas usadas de forma solta.",
    purple: "Automações desenhadas para aliviar seu time e aumentar lucro.",
  },
  {
    label: "Gestão da relação",
    generic: "Contato só em crises ou fechamento de contrato.",
    purple: "Rotina de alinhamento e espaço para decisões conjuntas.",
  },
];

export function DifferentialsComparative() {
  return (
    <section className="relative py-20 bg-black">
      <div className="absolute inset-0 halftone-pattern opacity-5" />

      <div className="relative z-10 container space-y-10">
        <div className="max-w-2xl">
          <h2 className="text-sm uppercase tracking-[0.22em] text-[#b8c709] mb-3">
            Não somos mais uma “gestão de tráfego”
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold text-white mb-3">
            A diferença entre uma agência comum e a {BRAND.shortName}.
          </p>
          <p className="text-sm sm:text-base text-[#cbcbcb]">
            A proposta não é “fazer a mesma coisa que todo mundo, só com outro
            nome”. É mudar a forma como o marketing é pensado, executado e
            acompanhado no dia a dia.
          </p>
        </div>

        <div className="rounded-3xl border border-[#5a14c0]/40 bg-gradient-to-b from-[#111] to-[#050505] overflow-hidden">
          <div className="grid grid-cols-[1.1fr,1fr,1fr] bg-black/40 text-[11px] sm:text-xs border-b border-[#5a14c0]/40">
            <div className="px-4 sm:px-6 py-3 border-r border-[#5a14c0]/25 text-[#cbcbcb]">
              O que está em jogo
            </div>
            <div className="px-4 sm:px-6 py-3 border-r border-[#5a14c0]/25 font-semibold text-[#cbcbcb]">
              Agência comum
            </div>
            <div className="px-4 sm:px-6 py-3 font-semibold text-white">
              {BRAND.shortName}
            </div>
          </div>

          <div className="divide-y divide-[#5a14c0]/30 text-[11px] sm:text-xs">
            {rows.map((row, index) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index }}
                className="grid grid-cols-[1.1fr,1fr,1fr]"
              >
                <div className="px-4 sm:px-6 py-3 border-r border-[#5a14c0]/25 text-[#cbcbcb]">
                  <p className="font-semibold text-white mb-1">{row.label}</p>
                </div>
                <div className="px-4 sm:px-6 py-3 border-r border-[#5a14c0]/25 text-[#a3a3a3]">
                  {row.generic}
                </div>
                <div className="px-4 sm:px-6 py-3 text-[#cbcbcb]">
                  {row.purple}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
