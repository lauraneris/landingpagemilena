// lib/brand.ts

export const BRAND = {
  name: "Purple Beyound Marketing",
  shortName: "Purple",
  tagline: "O marketing que você sempre quis. A tecnologia que você nunca teve.",
  description:
    "Mentes criativas com experiência real em performance.",
  // CTAs principais da landing
  primaryCtaLabel: "Agendar o primeiro lance estratégico",
  primaryCtaUrl: "https://wa.me/5541999999999?text=Quero%20um%20diagn%C3%B3stico%20estrat%C3%A9gico", // troque pelo seu link

  secondaryCtaLabel: "Ver nossos cases",
  secondaryCtaUrl: "/cases", // pode ser rota interna ou #ancora

  // Contatos principais
  contact: {
    email: "milena@agenciapurple.com",
    phoneDisplay: "+55 (42) 99907-2597",
    phoneRaw: "5542999072597", // só dígitos, pra URL do WhatsApp
  },


  // Links de navegação
  navigation: {
    about: "/sobre-nos",
    methodology: "/diferenciais",
    cases: "/cases",
    blog: "/blog",
    services: {
      performance: "/performance-marketing",
      brandStrategy: "/servicos/brand-strategy",
      growthConsulting: "/servicos/growth-consulting",
      automation: "/servicos/automacoes",
    },
  },

  // Redes sociais
  social: {
    instagram: "https://www.instagram.com/eusoupurple?igsh=MWl3aHowdGt5Ymw0ag==",
    linkedin: "https://linkedin.com/company/suaempresa",
  },
    // 🔹 AQUI: caminhos das logos/ícones
  assets: {
    // usa diretamente a logo7.svg que já está em public/icons/01 LOGO
    logoFull: "/icons/01 LOGO/logo7.svg",
    logoMark: "/icons/01 LOGO/logo7.svg",
    // se ainda não tiver uma imagem de og, pode deixar vazio ou ajustar depois
    ogImage: "/icons/02 ITENS/banner-1.png",
  },
};

