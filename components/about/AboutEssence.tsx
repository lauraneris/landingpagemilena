// components/about/AboutEssence.tsx
"use client";

import { motion } from "framer-motion";
import { Target, Zap, Eye } from "lucide-react";
import { BRAND } from "@/lib/brand";

const essence = [
  {
    icon: Target,
    title: "Estratégia acima de tática",
    description:
      "Antes de qualquer anúncio, entendemos o contexto: oferta, margem, capacidade de atendimento e objetivos reais de negócio.",
  },
  {
    icon: Zap,
    title: "Execução enxuta e inteligente",
    description:
      "Nada de trinta campanhas confusas. Preferimos poucas, muito bem pensadas, com hipóteses claras e espaço para aprender rápido.",
  },
  {
    icon: Eye,
    title: "Transparência radical",
    description:
      "Você enxerga o plano, sabe onde estamos agora e entende como cada ajuste impacta o caixa, não só o CTR.",
  },
];

export function AboutEssence() {
  return (
    <section className="relative py-20 bg-[#050505] border-y border-[#5a14c0]/20">
      <div className="absolute inset-0 halftone-pattern opacity-8" />

      <div className="relative z-10 container space-y-10">
        <div className="max-w-2xl">
          <h2 className="text-sm uppercase tracking-[0.22em] text-[#b8c709] mb-3">
            Essência da {BRAND.shortName}
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold text-white mb-3">
            Menos improviso. Mais decisões conscientes.
          </p>
          <p className="text-sm sm:text-base text-[#cbcbcb]">
            A Purple é uma agência “hands-on” que prefere dizer a verdade sobre o
            estágio do seu marketing do que vender promessas fáceis. Crescimento
            consistente nasce de processo, não de truque.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {essence.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="rounded-3xl border border-[#5a14c0]/40 bg-gradient-to-b from-[#111] to-[#050505] p-5 flex flex-col gap-3"
              >
                <Icon className="w-5 h-5 text-[#b8c709]" />
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-xs sm:text-sm text-[#cbcbcb]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
