// app/sobre-nos/page.tsx

import { AboutHero } from "@/components/about/AboutHero";
import { AboutEssence } from "@/components/about/AboutEssence";
import { AboutProcess } from "@/components/about/AboutProcess";
import { AboutFinalCta } from "@/components/about/AboutFinalCta";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutEssence />
      <AboutProcess />
      <AboutFinalCta />
    </>
  );
}
