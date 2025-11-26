// components/ServicesSection.tsx
"use client";

import { motion } from "framer-motion";
import { SignalHigh, Workflow, Gauge, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { BrandIcon } from "./BrandIcon";
import { Button } from "./ui/button";

export function ServicesSection() {
  const whatsappHref = `https://wa.me/${BRAND.contact.phoneRaw}?text=${encodeURIComponent(
    "Olá, quero entender melhor os serviços da Purple e a gestão automatizada em tempo real."
  )}`;

  return (
    <section
      id="servicos"
      className="relative py-24 bg-[#050505] border-y border-[#5a14c0]/20"
    >
      <div className="absolute inset-0 halftone-pattern opacity-8" />

      <div className="relative z-10 container space-y-12">
        <div className="max-w-2xl">
          <h2 className="text-sm uppercase tracking-[0.22em] text-[#b8c709] mb-3">
            O que a Purple coloca em jogo
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold text-white mb-3">
            Serviços pensados para rodar campanha em tempo real, não no escuro.
          </p>
          <p className="text-sm sm:text-base text-[#cbcbcb]">
            Mais do que subir anúncios, a {BRAND.shortName} conecta performance,
            automações e inteligência de dados em um sistema contínuo de decisão.
            Sua mídia deixa de ser um gasto isolado e passa a ser um mecanismo
            vivo de crescimento.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr,1fr] items-start">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[#5a14c0]/40 bg-gradient-to-b from-[#111] to-[#050505] p-6 space-y-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-2xl bg-[#5a14c0]/20 flex items-center justify-center">
                  <SignalHigh className="w-4 h-4 text-[#b8c709]" />
                </div>
                <p className="text-sm font-semibold text-white">
                  Gestão automatizada e em tempo real
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#cbcbcb]">
                Monitoramos suas campanhas como um “centro de comando”: regras
                automatizadas, alertas e ajustes constantes para não depender
                apenas de olhares manuais esporádicos.
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-[#cbcbcb]">
                <li className="flex gap-2">
                  <span className="mt-[3px] w-1.5 h-1.5 rounded-full bg-[#b8c709]" />
                  Regras inteligentes para pausar, escalar ou corrigir anúncios
                  com base em performance.
                </li>
                <li className="flex gap-2">
                  <span className="mt-[3px] w-1.5 h-1.5 rounded-full bg-[#b8c709]" />
                  Painel em tempo quase real para acompanhar principais métricas.
                </li>
                <li className="flex gap-2">
                  <span className="mt-[3px] w-1.5 h-1.5 rounded-full bg-[#b8c709]" />
                  Rotina definida de revisão: nada fica semanas rodando
                  desajustado.
                </li>
              </ul>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-[#5a14c0]/35 bg-[#050505] p-4 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-[#b8c709]" />
                  <p className="text-xs font-semibold text-white">
                    Performance Marketing
                  </p>
                </div>
                <p className="text-[11px] sm:text-xs text-[#cbcbcb]">
                  Planejamento, criação e otimização de campanhas em plataformas
                  como Meta Ads e Google Ads, com foco em CAC, LTV e margem.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-[#5a14c0]/35 bg-[#050505] p-4 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-[#b8c709]" />
                  <p className="text-xs font-semibold text-white">
                    Automações de funil
                  </p>
                </div>
                <p className="text-[11px] sm:text-xs text-[#cbcbcb]">
                  Conexão entre mídia, landing pages, WhatsApp, Instagram e CRM
                  para que cada lead siga uma jornada clara até a conversão.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-[#5a14c0]/35 bg-[#050505] p-4 space-y-2 md:col-span-2"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#b8c709]" />
                  <p className="text-xs font-semibold text-white">
                    Atendimento e decisões junto com você
                  </p>
                </div>
                <p className="text-[11px] sm:text-xs text-[#cbcbcb]">
                  Reuniões estratégicas recorrentes, leitura conjunta dos dados
                  e tomada de decisão compartilhada. Você entende o porquê de
                  cada movimento.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-md mx-auto"
          >
            <div className="absolute -top-10 -left-6 w-32 h-32 bg-[#5a14c0]/35 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -right-6 w-32 h-32 bg-[#ffb380]/35 blur-3xl rounded-full" />

            <div className="relative rounded-3xl border border-[#5a14c0]/40 bg-gradient-to-b from-[#141414] to-[#050505] p-6 flex flex-col gap-4 neon-glow overflow-hidden">
              <BrandIcon
                name="p03ElementosGraficosGraphic1Png"
                alt="Console de campanhas Purple"
                className="w-full max-w-[260px] h-auto object-contain mx-auto"
              />

              <div className="space-y-2 text-xs sm:text-sm text-[#cbcbcb]">
                <p className="font-semibold text-white">
                  Console de campanhas Purple
                </p>
                <p>
                  Um jeito organizado de enxergar suas campanhas, entender o que
                  está acontecendo agora e qual o próximo ajuste.
                </p>
              </div>

              <Button
                as="a"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="mt-2 w-full bg-[#b8c709] hover:bg-[#a0b308] text-black border-none neon-glow neon-glow-hover group text-sm"
              >
                Falar sobre gestão em tempo real
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
