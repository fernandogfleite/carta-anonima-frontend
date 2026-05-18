"use client";

import { Card } from "../../../shared/components/Card";
import { Skeleton } from "../../../shared/components/Skeleton";
import { useGuessStats } from "../hooks/useGuessStats";

export function GuessStatsPanel() {
  const { data, isLoading } = useGuessStats();

  return (
    <Card className="grid gap-4 md:grid-cols-3">
      {isLoading && (
        <>
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
        </>
      )}
      {data && (
        <>
          <div>
            <p className="text-xs text-ink-500">Tentativas</p>
            <p className="font-display text-2xl text-ink-900">
              {data.totalAttempts}
            </p>
          </div>
          <div>
            <p className="text-xs text-ink-500">Acertos</p>
            <p className="font-display text-2xl text-ink-900">
              {data.correctAttempts}
            </p>
          </div>
          <div>
            <p className="text-xs text-ink-500">Erros</p>
            <p className="font-display text-2xl text-ink-900">
              {data.wrongAttempts}
            </p>
          </div>
          <div>
            <p className="text-xs text-ink-500">Resolvidas</p>
            <p className="font-display text-2xl text-ink-900">
              {data.solvedLetters}
            </p>
          </div>
          <div>
            <p className="text-xs text-ink-500">Pendentes</p>
            <p className="font-display text-2xl text-ink-900">
              {data.pendingLetters}
            </p>
          </div>
          <div>
            <p className="text-xs text-ink-500">Media ate acertar</p>
            <p className="font-display text-2xl text-ink-900">
              {data.avgAttemptsToSolve
                ? data.avgAttemptsToSolve.toFixed(1)
                : "-"}
            </p>
          </div>
        </>
      )}
    </Card>
  );
}
