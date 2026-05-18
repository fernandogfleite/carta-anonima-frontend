"use client";

import { LettersForm } from "./letters-form";
import { SectionHeader } from "../../../shared/components/SectionHeader";

export function LettersSection() {
  return (
    <section className="space-y-6">
      <LettersForm />
      <SectionHeader
        title="Envio anonimo"
        subtitle="Sua carta sera recebida com carinho pela aniversariante."
      />
    </section>
  );
}
