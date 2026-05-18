"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, Input } from "../../../shared";
import { useAdminLogin } from "../hooks/useAdminLogin";
import { useRouter } from "next/navigation";
import { routes } from "../../../shared/constants/routes";

const schema = z.object({
  email: z.string().email("Email invalido"),
  password: z.string().min(6, "Senha muito curta"),
});

type FormValues = z.infer<typeof schema>;

export function AdminLogin() {
  const router = useRouter();
  const { mutateAsync, isPending } = useAdminLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    await mutateAsync(values);
    router.replace(routes.admin);
  };

  return (
    <Card className="space-y-4">
      <div>
        <h1 className="section-title">Painel administrativo</h1>
        <p className="text-sm text-ink-700">
          Entre para gerenciar cartas e estatisticas.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Email"
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          label="Senha"
          type="password"
          error={errors.password?.message}
          {...register("password")}
        />
        <Button type="submit" isLoading={isPending}>
          Entrar
        </Button>
      </form>
    </Card>
  );
}
