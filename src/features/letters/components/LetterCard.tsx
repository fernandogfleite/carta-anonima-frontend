import Link from "next/link";
import { cn } from "../../../shared/helpers/cn";
import type { Letter } from "../services/models/letter";
import { Badge } from "../../../shared/components/Badge";

export function LetterCard({ letter }: { letter: Letter }) {
  return (
    <Link href={`/letters/${letter.id}`} className="block">
      <div
        className={cn(
          "card-surface space-y-3 p-5 transition hover:-translate-y-1 hover:shadow-soft",
        )}
        aria-label="Carta"
      >
        <div className="flex items-center justify-between">
          <Badge
            label={letter.isRevealed ? "Revelada" : "Anonima"}
            variant={letter.isRevealed ? "success" : "info"}
          />
          <span className="text-xs text-ink-500">
            {new Date(letter.createdAt).toLocaleDateString("pt-BR")}
          </span>
        </div>
        <p className="text-sm text-ink-700">{letter.content}</p>
        {letter.anonymousHint && (
          <span className="text-xs text-rose-600">
            Pista: {letter.anonymousHint}
          </span>
        )}
      </div>
    </Link>
  );
}
