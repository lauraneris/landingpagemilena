
"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Shield, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { BRAND } from "@/lib/brand";

const plans = [
  {
    name: "Purple Plan",
    subtitle: "Para quem quer começar com precisão",
    price: "R$ 2.000",
    period: "/mês",
    features: [
      "Análise estratégica completa",
      "Planejamento de campanhas",
      "Gestão por unidade de conta",
      "Otimização mensal",
      "Relatórios executivos",
    ],
    popular: false,
    ctaLabel: "Quero esse plano",
  },
  {
    name: "Purple Intelligence",
    subtitle: "Para quem quer escala agressiva com segurança",
    price: "R$ 2.500",
    period: "/mês",
    features: [
      "Tudo do Purple Plan",
      "Automações avançadas com landing pages e agentes especializados para whatsapp e instagram",
      "Otimização contínua (24/7)",
      "Dashboard personalizado",
      "Consultor dedicado",
    ],
    popular: true,
    badge: "MAIS ESCOLHIDO",
    ctaLabel: "Falar com especialista",
  },
  {
    name: "Enterprise",
    subtitle: "Soluções sob medida para estruturas complexas",
    price: "Sob consulta",
    period: "",
    features: [
      "Equipe dedicada",
      "Squads customizados",
      "Integração com times internos",
      "Workshops estratégicos",
    ],
    popular: false,
    ctaLabel: "Montar proposta sob medida",
  },
];

export function ConversionSection() {
  return (
    <section className="relative py-24 bg-[#050505]">
      <div className="absolute inset-0 halftone-pattern opacity-5" />

      <div className="relative z-10 container space-y-12">
        <div className="max-w-2xl text-center mx-auto">
          <h2 className="text-sm uppercase tracking-[0.22em] text-[#b8c709] mb-3">
            Planos & parceria
          </h2>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            Escolha o nível de profundidade que faz sentido para o momento da sua empresa.
          </h3>
          <p className="text-sm sm:text-base text-[#cbcbcb]">
            Todos os planos incluem acompanhamento estratégico, relatórios e acesso ao nosso time.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => {
            const whatsappHref = `https://wa.me/${BRAND.contact.phoneRaw}?text=${encodeURIComponent(
              `Olá, quero saber mais sobre o ${plan.name} da Purple.`
            )}`;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className={[
                  "relative rounded-3xl border bg-gradient-to-b p-6 flex flex-col justify-between",
                  plan.popular
                    ? "border-[#b8c709] from-[#131a05] to-[#050505]"
                    : "border-[#5a14c0]/40 from-[#111] to-[#050505]",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {plan.badge && (
                  <div className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-[#b8c709] text-black text-xs font-semibold shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-4 mb-6">
                  <h4 className="text-lg font-semibold">{plan.name}</h4>
                  <p className="text-xs text-[#cbcbcb]">{plan.subtitle}</p>

                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-semibold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-xs text-[#cbcbcb]">
                        {plan.period}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-2 text-xs text-[#cbcbcb]">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#b8c709] mt-[2px]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <Button
                    as="a"
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    className={[
                      "w-full group",
                      plan.popular
                        ? "bg-[#b8c709] hover:bg-[#a0b308] text-black neon-glow-hover"
                        : "bg-[#5a14c0] hover:bg-[#7020e0] text-white",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {plan.ctaLabel}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs sm:text-sm text-[#cbcbcb]">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#b8c709]" />
            <span>Onboarding completo em até 14 dias.</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#b8c709]" />
            <span>Sem contratos engessados de longo prazo.</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#b8c709]" />
            <span>Reuniões estratégicas recorrentes com o time.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
