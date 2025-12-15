"use client";
import { motion } from "framer-motion";
import { Zap, Compass, Target, Shield } from "lucide-react";

const principles = [
  {
    icon: Compass,
    title: "Estratégia primeiro",
    description:
      "Nenhuma campanha sobe sem objetivo claro, métrica de sucesso e definição do que é falha aceitável.",
  },
  {
    icon: Target,
    title: "Dados com contexto",
    description:
      "Número sozinho não decide. Olhamos histórico, operação, margem e capacidade real de atendimento.",
  },
  {
    icon: Shield,
    title: "Transparência radical",
    description:
      "Você sabe exatamente o que está acontecendo, o que deu certo, o que não deu e por quê.",
  },
];

const steps = [
  {
    label: "1. Diagnóstico profundo",
    description:
      "Mapeamos funil, oferta, histórico de mídia e operação para entender onde o marketing realmente trava hoje.",
  },
  {
    label: "2. Plano de ataque",
    description:
      "Desenhamos a ordem dos movimentos: canais, criativos, mensagens e metas para cada etapa.",
  },
  {
    label: "3. Primeiros 30 dias",
    description:
      "Foco em aprender rápido: quem responde melhor, quais mensagens batem e quais caminhos não valem insistir.",
  },
  {
    label: "4. Ritmo de otimização",
    description:
      "Rotina de ajustes contínuos, encontros estratégicos e decisões sempre amarradas a dados e realidade do negócio.",
  },
];

export function SocialProof() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 halftone-pattern opacity-5" />

      <div className="relative z-10 container max-w-5xl space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-sm uppercase tracking-[0.22em] text-[#b8c709] mb-3">
            Como pensamos crescimento
          </h2>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            Método, clareza e parceria.
          </h3>
          <p className="text-sm sm:text-base text-[#cbcbcb] max-w-2xl mx-auto">
            Compromisso com o processo, transparência  e uma forma diferente de fazer marketing: mais estratégica, menos aleatória.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[2fr,1.3fr] items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[#5a14c0]/40 bg-gradient-to-b from-[#111] to-[#050505] p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="absolute -top-10 -left-6 w-24 h-24 rounded-full bg-[#5a14c0]/30 blur-3xl" />
            <div className="relative space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b8c709]/10 border border-[#b8c709]/40 text-xs text-[#b8c709] mb-2">
                <Zap className="w-3 h-3" />
                <span>Manifesto Purple</span>
              </div>
              <p className="text-lg sm:text-xl text-white leading-relaxed">
                Não somos uma “gestão de tráfego” que aperta botão e some. Somos o cérebro
                estratégico antes de qualquer investimento em mídia.
              </p>
              <p className="text-sm text-[#cbcbcb]">
                Nosso compromisso é construir previsibilidade, não prometer multiplicadores
                milagrosos em poucos dias. Isso começa pelos princípios que guiam todas as
                decisões que tomamos com você.
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {principles.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="bg-[#050505] border border-[#5a14c0]/40 rounded-2xl px-4 py-3 flex flex-col gap-2"
                    >
                      <Icon className="w-4 h-4 text-[#b8c709]" />
                      <p className="text-sm font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="text-xs text-[#cbcbcb]">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 rounded-3xl border border-[#5a14c0]/40 bg-gradient-to-b from-[#050505] to-black p-5 sm:p-6"
          >
            <h4 className="text-sm font-semibold text-white mb-1">
              Playbook da parceria
            </h4>
            <p className="text-xs sm:text-sm text-[#cbcbcb] mb-4">
              Em vez de prometer um resultado específico que ainda não existe, deixamos claro
              o que você pode esperar da jornada com a Purple do primeiro ao próximo passo.
            </p>

            <div className="space-y-3">
              {steps.map((step) => (
                <div
                  key={step.label}
                  className="flex gap-3 items-start rounded-2xl border border-[#5a14c0]/30 bg-black/40 px-3 py-3"
                >
                  <div className="mt-[2px] flex h-6 w-6 items-center justify-center rounded-full bg-[#5a14c0]/20 text-[10px] font-semibold text-[#b8c709]">
                    ●
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      {step.label}
                    </p>
                    <p className="text-xs text-[#cbcbcb]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[11px] sm:text-xs text-[#777] mt-3">
              Não existe milagre, existe processo. Se você quer construir essa base junto,
              a Purple entra como parceira estratégica, não apenas como mais um fornecedor.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
