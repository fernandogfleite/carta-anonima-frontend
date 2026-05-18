"use client";

import { useRandomLetter } from "../hooks/useRandomLetter";
import { Card } from "../../../shared/components/Card";
import { Button } from "../../../shared/components/Button";
import { Skeleton } from "../../../shared/components/Skeleton";
import { useEffect, useMemo, useState } from "react";
import { GuessForm } from "../../guesses/presentation/guess-form";
import { GuessStatsPanel } from "../../guesses/presentation/guess-stats";

export function ReadingRoom() {
  const { data, isLoading, refetch, isFetching } = useRandomLetter();
  const [solvedOverride, setSolvedOverride] = useState(false);
  const [attemptsOverride, setAttemptsOverride] = useState<number | null>(null);
  useEffect(() => {
    setSolvedOverride(false);
    setAttemptsOverride(null);
  }, [data?.id]);
  const isSolved = useMemo(
    () => (solvedOverride ? true : (data?.isSolved ?? false)),
    [solvedOverride, data?.isSolved],
  );
  const attemptsCount = useMemo(
    () => attemptsOverride ?? data?.attemptsCount ?? 0,
    [attemptsOverride, data?.attemptsCount],
  );

  return (
    <div className="space-y-6">
      <Card className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="section-title">Carta surpresa</h2>
          <Button
            variant="ghost"
            onClick={() => refetch()}
            isLoading={isFetching}
          >
            Nova carta
          </Button>
        </div>
        {isLoading && (
          <div className="space-y-3">
            <Skeleton className="h-4" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        )}
        {data && (
          <div className="space-y-3">
            <p className="text-base text-ink-800">{data.content}</p>
            {data.anonymousHint && (
              <p className="text-sm text-rose-700">
                Pista: {data.anonymousHint}
              </p>
            )}
            {isSolved && data.senderName && (
              <p className="text-sm text-ink-700">
                Remetente: {data.senderName}
              </p>
            )}
          </div>
        )}
      </Card>

      {data && (
        <GuessForm
          letterId={data.id}
          isSolved={isSolved}
          attemptsCount={attemptsCount}
          onSolved={() => setSolvedOverride(true)}
          onAttempt={(count) => setAttemptsOverride(count)}
        />
      )}
      <GuessStatsPanel />
    </div>
  );
}
