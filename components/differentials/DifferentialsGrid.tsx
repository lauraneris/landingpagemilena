// components/differentials/DifferentialsGrid.tsx
"use client";

import { motion } from "framer-motion";
import { Zap, Target, Brain, Workflow, Gauge, Shield } from "lucide-react";
import { BRAND } from "@/lib/brand";

const items = [
  {
    icon: Brain,
    title: "Pensamento de negócio, não só de mídia",
    description:
      "Começamos pela lógica do caixa: margem, ticket, capacidade e objetivos reais. A mídia vem depois disso, não antes.",
  },
  {
    icon: Target,
    title: "Hipóteses claras em cada campanha",
    description:
      "Nada entra no ar sem uma pergunta a responder: qual público, qual mensagem, qual oferta queremos validar.",
  },
  {
    icon: Workflow,
    title: "Operação enxuta e organizada",
    description:
      "Preferimos poucas campanhas muito bem estruturadas do que dezenas difíceis de acompanhar e otimizar.",
  },
  {
    icon: Gauge,
    title: "Obcecados por previsibilidade",
    description:
      "Mais importante do que um pico de resultado é construir um modelo que você consiga repetir e escalar.",
  },
  {
    icon: Zap,
    title: "Automações com propósito",
    description:
      "WhatsApp, Instagram e funis automatizados entram em jogo para liberar tempo do seu time, não para complicar.",
  },
  {
    icon: Shield,
    title: "Transparência na relação",
    description:
      "Falamos o que você precisa ouvir, não só o que é confortável. Isso inclui limites, riscos e cenários reais.",
  },
];

export function DifferentialsGrid() {
  return (
    <section className="relative py-20 bg-[#050505] border-y border-[#5a14c0]/20">
      <div className="absolute inset-0 halftone-pattern opacity-8" />

      <div className="relative z-10 container space-y-10">
        <div className="max-w-2xl">
          <h2 className="text-sm uppercase tracking-[0.22em] text-[#b8c709] mb-3">
            Nossos diferenciais na prática
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold text-white mb-3">
            O que muda quando a {BRAND.shortName} entra no jogo.
          </p>
          <p className="text-sm sm:text-base text-[#cbcbcb]">
            Mais do que “fazer tráfego”, nossa função é organizar o pensamento
            de crescimento da sua empresa, transformar isso em um plano de
            execução e manter o sistema rodando com clareza.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index }}
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
