import { LettersSection } from "../features/letters/presentation/letters-section";
import { Card } from "../shared/components/Card";
import { Button } from "../shared/components/Button";

export default function HomePage() {
  return (
    <main className="container-page space-y-10">
      <section className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-rose-600">
            Feliz aniversário
          </p>
          <h1 className="font-display text-4xl text-ink-900 md:text-5xl">
            Um mural de cartas anônimas para descobrir quem espalha carinho.
          </h1>
          <p className="text-base text-ink-700">
            Envie uma carta carinhosa e anônima para celebrar este momento
            especial.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button>Enviar carta</Button>
          </div>
        </div>
        <Card className="space-y-3">
          <p className="text-sm text-ink-600">Como funciona</p>
          <ol className="space-y-2 text-sm text-ink-700">
            <li>1. Você escreve uma mensagem especial.</li>
            <li>2. A carta é enviada com carinho.</li>
            <li>3. Pronto. Sua surpresa está registrada.</li>
          </ol>
        </Card>
      </section>
      <LettersSection />
    </main>
  );
}
