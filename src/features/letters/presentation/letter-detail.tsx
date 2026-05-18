"use client";

import { useLetter } from "../hooks/useLetter";
import { Card } from "../../../shared/components/Card";
import { Skeleton } from "../../../shared/components/Skeleton";
import { Badge } from "../../../shared/components/Badge";

export function LetterDetail({ letterId }: { letterId: number }) {
  const { data, isLoading } = useLetter(letterId);

  if (isLoading) {
    return (
      <Card className="space-y-4">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4" />
        <Skeleton className="h-4 w-3/4" />
      </Card>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <Card className="space-y-4">
      <div className="flex items-center justify-between">
        <Badge
          label={data.isRevealed ? "Revelada" : "Anônima"}
          variant={data.isRevealed ? "success" : "info"}
        />
        <span className="text-xs text-ink-500">
          {new Date(data.createdAt).toLocaleString("pt-BR")}
        </span>
      </div>
      <p className="text-xs text-ink-600">
        Status: {data.isSolved ? "Resolvida" : "Pendente"} • Tentativas:{" "}
        {data.attemptsCount}
      </p>
      <p className="text-base text-ink-800">{data.content}</p>
      {data.anonymousHint && (
        <p className="text-sm text-rose-700">Pista: {data.anonymousHint}</p>
      )}
      {data.isRevealed && data.senderName && (
        <p className="text-sm text-ink-700">Enviada por {data.senderName}</p>
      )}
    </Card>
  );
}
