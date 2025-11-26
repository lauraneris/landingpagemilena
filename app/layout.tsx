// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Purple",
  description: "Inteligência em marketing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white">
        <Navbar />
        <main className="pt-16 min-h-screen flex flex-col">
          {/* conteúdo da página */}
          <div className="flex-1">{children}</div>

          {/* footer sempre visível em todas as páginas */}
          <Footer />
        </main>
      </body>
    </html>
  );
}
