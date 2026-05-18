"use client";

import { useAdminSummary } from "../hooks/useAdminSummary";
import { useAdminLetters } from "../hooks/useAdminLetters";
import { useAdminLetterActions } from "../hooks/useAdminLetterActions";
import { Card } from "../../../shared/components/Card";
import { Skeleton } from "../../../shared/components/Skeleton";
import { Button } from "../../../shared/components/Button";
import { Badge } from "../../../shared/components/Badge";
import { SectionHeader } from "../../../shared/components/SectionHeader";
import { EmptyState } from "../../../shared/components/EmptyState";

export function AdminDashboard() {
  const { data: summary, isLoading: isSummaryLoading } = useAdminSummary();
  const { data: letters = [], isLoading: isLettersLoading } = useAdminLetters();
  const { deleteMutation, updateMutation } = useAdminLetterActions();

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Dashboard"
        subtitle="Visao geral e controle das cartas."
      />
      <Card className="grid gap-4 md:grid-cols-5">
        {isSummaryLoading && (
          <>
            <Skeleton className="h-6" />
            <Skeleton className="h-6" />
            <Skeleton className="h-6" />
            <Skeleton className="h-6" />
            <Skeleton className="h-6" />
          </>
        )}
        {summary && (
          <>
            <div>
              <p className="text-xs text-ink-500">Total de cartas</p>
              <p className="font-display text-2xl text-ink-900">
                {summary.totalLetters}
              </p>
            </div>
            <div>
              <p className="text-xs text-ink-500">Reveladas</p>
              <p className="font-display text-2xl text-ink-900">
                {summary.revealedLetters}
              </p>
            </div>
            <div>
              <p className="text-xs text-ink-500">Resolvidas</p>
              <p className="font-display text-2xl text-ink-900">
                {summary.solvedLetters}
              </p>
            </div>
            <div>
              <p className="text-xs text-ink-500">Pendentes</p>
              <p className="font-display text-2xl text-ink-900">
                {summary.pendingLetters}
              </p>
            </div>
            <div>
              <p className="text-xs text-ink-500">Tentativas</p>
              <p className="font-display text-2xl text-ink-900">
                {summary.totalGuesses}
              </p>
            </div>
          </>
        )}
      </Card>

      <div className="space-y-4">
        <SectionHeader
          title="Cartas"
          subtitle="Gerencie conteudos e revele remetentes."
        />
        {isLettersLoading && (
          <div className="grid gap-4 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <Card key={index} className="space-y-3">
                <Skeleton className="h-4" />
                <Skeleton className="h-4 w-3/4" />
              </Card>
            ))}
          </div>
        )}
        {!isLettersLoading && !letters.length && (
          <EmptyState
            title="Nenhuma carta"
            description="Ainda nao ha cartas para administrar."
          />
        )}
        <div className="grid gap-4 md:grid-cols-2">
          {letters.map((letter) => (
            <Card key={letter.id} className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge
                  label={letter.isRevealed ? "Revelada" : "Anonima"}
                  variant={letter.isRevealed ? "success" : "info"}
                />
                <span className="text-xs text-ink-500">
                  {new Date(letter.createdAt).toLocaleDateString("pt-BR")}
                </span>
              </div>
              <p className="text-sm text-ink-800">{letter.content}</p>
              <p className="text-xs text-ink-600">
                Remetente: {letter.senderName}
              </p>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="secondary"
                  onClick={() =>
                    updateMutation.mutate({
                      letterId: letter.id,
                      payload: { is_revealed: !letter.isRevealed },
                    })
                  }
                  isLoading={updateMutation.isPending}
                >
                  {letter.isRevealed ? "Ocultar" : "Revelar"}
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => deleteMutation.mutate(letter.id)}
                  isLoading={deleteMutation.isPending}
                >
                  Excluir
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
