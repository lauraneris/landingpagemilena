"use client";

import { Instagram, Mail, Phone } from "lucide-react";
import { BRAND } from "@/lib/brand";

export function Footer() {
  const links = {
    company: [
      { label: "Sobre nós", href: BRAND.navigation.about },
      { label: "Diferenciais", href: BRAND.navigation.methodology },
      { label: "Cases", href: BRAND.navigation.cases },
      { label: "Blog", href: BRAND.navigation.blog },
    ],
  };

  return (
    <footer className="bg-black border-t border-[#5a14c0]/30 pt-8">
      <div className="container pb-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Coluna esquerda: logo + descrição + ícones */}
          <div className="space-y-4 md:w-1/3 max-w-sm">
            <div className="flex items-center">
              {BRAND.assets.logoFull ? (
                <img
                  src={BRAND.assets.logoFull}
                  alt={BRAND.name}
                  className="h-8 w-auto"
                />
              ) : (
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#5a14c0] to-[#ffb380] flex items-center justify-center">
                  <span className="text-xs font-bold">
                    {BRAND.shortName.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            <p className="text-xs sm:text-sm text-[#cbcbcb]">
              {BRAND.description}
            </p>

            <div className="flex gap-3">
              {BRAND.social.instagram && (
                <a
                  href={BRAND.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full border border-[#5a14c0]/40 flex items-center justify-center hover:border-[#b8c709]"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}

              {BRAND.contact.email && (
                <a
                  href={`mailto:${BRAND.contact.email}`}
                  aria-label="E-mail"
                  className="w-9 h-9 rounded-full border border-[#5a14c0]/40 flex items-center justify-center hover:border-[#b8c709]"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* (Opcional) Coluna do meio: Empresa
              Se quiser voltar depois, é só descomentar esse bloco e ajustar o layout. */}
          {/* <div className="md:w-1/3 text-xs sm:text-sm">
            <h4 className="font-semibold mb-3">Empresa</h4>
            <ul className="space-y-2 text-[#cbcbcb]">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#b8c709] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Coluna direita: Contato, puxado para o canto */}
          <div className="md:w-1/3 text-xs sm:text-sm md:flex md:justify-end">
            <div className="space-y-2 max-w-xs">
              <h4 className="font-semibold mb-3">Contato</h4>

              {BRAND.contact.phoneDisplay && (
                <p className="text-[#cbcbcb] flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a
                    href={`https://wa.me/${BRAND.contact.phoneRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#b8c709]"
                  >
                    {BRAND.contact.phoneDisplay}
                  </a>
                </p>
              )}

              {BRAND.contact.email && (
                <p className="text-[#cbcbcb] flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a
                    href={`mailto:${BRAND.contact.email}`}
                    className="hover:text-[#b8c709]"
                  >
                    {BRAND.contact.email}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Linha com direitos reservados */}
        <div className="mt-8 pt-4 border-t border-[#5a14c0]/20 text-[11px] sm:text-xs text-[#777]">
          <span>
            © {new Date().getFullYear()} Purple. Todos os direitos reservados.
          </span>
        </div>
      </div>

      {/* Linha neon embaixo */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#5a14c0] to-transparent" />
    </footer>
  );
}
