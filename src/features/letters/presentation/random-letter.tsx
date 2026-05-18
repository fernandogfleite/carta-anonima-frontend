"use client";

import { useRandomLetter } from "../hooks/useRandomLetter";
import { Button } from "../../../shared/components/Button";
import { Card } from "../../../shared/components/Card";
import { Skeleton } from "../../../shared/components/Skeleton";

export function RandomLetter() {
  const { data, isLoading, refetch, isFetching } = useRandomLetter();

  return (
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
            <p className="text-sm text-rose-700">Pista: {data.anonymousHint}</p>
          )}
        </div>
      )}
    </Card>
  );
}
