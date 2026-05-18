import { EmptyState } from "../../../shared/components/EmptyState";
import { Skeleton } from "../../../shared/components/Skeleton";
import type { Letter } from "../services/models/letter";
import { LetterCard } from "./LetterCard";

type LetterListProps = {
  letters: Letter[];
  isLoading: boolean;
};

export function LetterList({ letters, isLoading }: LetterListProps) {
  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="card-surface space-y-3 p-5">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-4" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ))}
      </div>
    );
  }

  if (!letters.length) {
    return (
      <EmptyState
        title="Nenhuma carta ainda"
        description="Seja o primeiro a enviar uma mensagem."
      />
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {letters.map((letter) => (
        <LetterCard key={letter.id} letter={letter} />
      ))}
    </div>
  );
}
