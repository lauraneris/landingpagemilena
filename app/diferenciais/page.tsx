// app/diferenciais/page.tsx

import { DifferentialsHero } from "@/components/differentials/DifferentialsHero";
import { DifferentialsGrid } from "@/components/differentials/DifferentialsGrid";
import { DifferentialsComparative } from "@/components/differentials/DifferentialsComparative";
import { DifferentialsCta } from "@/components/differentials/DifferentialsCta";

export default function DifferentialsPage() {
  return (
    <>
      <DifferentialsHero />
      <DifferentialsGrid />
      <DifferentialsComparative />
      <DifferentialsCta />
    </>
  );
}
