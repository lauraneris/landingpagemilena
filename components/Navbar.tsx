// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { BrandIcon } from "./BrandIcon";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const whatsappHref = `https://wa.me/${BRAND.contact.phoneRaw}?text=${encodeURIComponent(
    "Olá, quero conversar com a Purple."
  )}`;

  const navLinks = [
    { label: "Início", href: "/" },
    { label: "Quem somos", href: "/sobre-nos" },
    { label: "Diferenciais", href: "/diferenciais" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-[#5a14c0]/30 bg-black/70 backdrop-blur-md">
      <div className="container flex items-center justify-between py-3">
        {/* Logo (somente ícone, sem nome) */}
        <Link href="/" className="flex items-center">
          <BrandIcon
            name="p01LogoLogo8Png" // <- logo8.png
            alt={BRAND.name}
            className="h-8 w-auto"
          />
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs sm:text-sm text-[#cbcbcb] hover:text-[#b8c709] transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm px-4 py-2 rounded-full bg-[#b8c709] hover:bg-[#a0b308] text-black font-medium neon-glow neon-glow-hover transition-colors"
          >
            Contato
          </a>
        </nav>

        {/* Botão mobile */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#5a14c0]/40 text-[#cbcbcb]"
          aria-label="Abrir menu"
        >
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden border-t border-[#5a14c0]/30 bg-black/95">
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-[#cbcbcb] hover:text-[#b8c709] transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center text-sm px-4 py-2 rounded-full bg-[#b8c709] hover:bg-[#a0b308] text-black font-medium neon-glow neon-glow-hover transition-colors"
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
