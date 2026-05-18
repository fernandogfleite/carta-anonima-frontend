"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, Input } from "../../../shared";
import { useCreateGuess } from "../hooks/useCreateGuess";
import { useToast } from "../../../shared/hooks/useToast";

const schema = z.object({
  guessedName: z.string().min(2, "Nome muito curto").max(120),
});

type FormValues = z.infer<typeof schema>;

type GuessFormProps = {
  letterId: number;
  isSolved: boolean;
  attemptsCount: number;
  onSolved: () => void;
  onAttempt: (count: number) => void;
};

export function GuessForm({
  letterId,
  isSolved,
  attemptsCount,
  onSolved,
  onAttempt,
}: GuessFormProps) {
  const { push } = useToast();
  const { mutateAsync, isPending } = useCreateGuess();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    const result = await mutateAsync({
      letter_id: letterId,
      guessed_name: values.guessedName,
    });
    onAttempt(result.attemptsCount || attemptsCount + 1);
    if (result.isCorrect) {
      onSolved();
      push("Acertou! Carta resolvida.", "success");
      return;
    }
    push("Nao foi desta vez. Tente novamente.", "error");
  };

  return (
    <Card className="space-y-4">
      <div>
        <h3 className="font-display text-2xl text-ink-900">Adivinhacao</h3>
        <p className="text-sm text-ink-700">
          Tente quantas vezes precisar ate acertar.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Quem enviou?"
          error={errors.guessedName?.message}
          {...register("guessedName")}
        />
        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit" isLoading={isPending} disabled={isSolved}>
            {isSolved ? "Carta resolvida" : "Enviar tentativa"}
          </Button>
          <span className="text-xs text-ink-600">
            Tentativas: {attemptsCount}
          </span>
        </div>
      </form>
    </Card>
  );
}
