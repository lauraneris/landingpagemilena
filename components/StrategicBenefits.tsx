// components/StrategicBenefits.tsx
"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  Crown,
  TrendingUp,
  Shield,
  Zap,
  Target,
} from "lucide-react";

export function StrategicBenefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Previsibilidade de receita",
      description:
        "Planejamos funil e mídia para você saber, com antecedência, quanto pode faturar mês a mês, em vez de torcer para “dar bom”.",
    },
    {
      icon: Crown,
      title: "Autoridade de marca",
      description:
        "Sua empresa posicionada como a referência da categoria, aquela que o cliente lembra primeiro — e não apenas “mais um” competindo por preço.",
    },
    {
      icon: TrendingUp,
      title: "Escala saudável",
      description:
        "Crescer sem destruir sua margem: quanto você investe, quanto volta e quanto cada cliente deixa de lucro ao longo do tempo. Não é só encher a base de leads, é encher a base de bons clientes.",
    },
    {
      icon: Shield,
      title: "Blindagem contra crises",
      description:
        "Estratégias de relacionamento e retenção para não ficar refém de anúncio caro ou mudança de algoritmo. Quando o mercado aperta, sua base continua comprando de você.",
    },
    {
      icon: Zap,
      title: "Decisões rápidas",
      description:
        "Dashboards e relatórios em tempo quase real para decidir baseado em dados, não em feeling.",
    },
    {
      icon: Target,
      title: "Foco em clientes certos",
      description:
        "Menos perda de tempo em atendimento, mais energia em quem tem chance real de virar receita.",
    },
  ];

  return (
    <section className="relative py-20 bg-[#050505]">
      <div className="absolute inset-0 halftone-pattern-dense opacity-5" />

      <div className="relative z-10 container space-y-10">
        <div className="max-w-2xl">
          <h2 className="text-sm uppercase tracking-[0.22em] text-[#b8c709] mb-3">
            Benefícios estratégicos
          </h2>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            O que muda quando o marketing para de ser só “post e anúncio” e vira
            inteligência de negócio.
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative rounded-3xl border border-[#5a14c0]/25 bg-gradient-to-b from-[#111] to-transparent p-5 group overflow-hidden"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#5a14c0]/30 border border-[#5a14c0]/60 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-sm font-semibold mb-2 group-hover:text-[#b8c709]">
                  {benefit.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#cbcbcb] leading-relaxed">
                  {benefit.description}
                </p>

                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#5a14c0]/0 group-hover:border-[#5a14c0]/40 rounded-tl-3xl" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
