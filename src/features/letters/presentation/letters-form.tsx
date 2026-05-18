"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, Input } from "../../../shared";
import { useCreateLetter } from "../hooks/useCreateLetter";
import { useToast } from "../../../shared/hooks/useToast";

const schema = z.object({
  content: z.string().min(10, "Conteudo muito curto").max(4000),
  senderName: z.string().min(2, "Nome muito curto").max(120),
  anonymousHint: z.string().max(200).optional(),
});

type FormValues = z.infer<typeof schema>;

export const LettersForm = () => {
  const { push } = useToast();
  const { mutateAsync, isPending } = useCreateLetter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    await mutateAsync({
      content: values.content,
      sender_name: values.senderName,
      anonymous_hint: values.anonymousHint || null,
    });
    reset();
    push("Carta enviada com sucesso!", "success");
  };

  return (
    <Card className="space-y-4">
      <div>
        <h2 className="section-title">Escreva sua carta</h2>
        <p className="text-sm text-ink-700">
          Envie uma mensagem carinhosa e deixe uma pista sutil.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <label className="flex flex-col gap-2 text-sm text-ink-700">
          <span className="font-semibold text-ink-800">Mensagem</span>
          <textarea
            className="min-h-[140px] w-full rounded-2xl border border-rose-100 bg-white/80 px-4 py-3 text-ink-900 shadow-sm focus:border-rose-300 focus:ring-2 focus:ring-rose-200"
            {...register("content")}
          />
          {errors.content && (
            <span className="text-xs text-ink-700">
              {errors.content.message}
            </span>
          )}
        </label>
        <div className="grid gap-4 md:grid-cols-2">
          <Input
            label="Seu nome"
            error={errors.senderName?.message}
            {...register("senderName")}
          />
          <Input
            label="Pista opcional"
            error={errors.anonymousHint?.message}
            {...register("anonymousHint")}
          />
        </div>
        <Button type="submit" isLoading={isPending}>
          Enviar carta
        </Button>
      </form>
    </Card>
  );
};
