"use client";

import type { ButtonHTMLAttributes } from "react";
import { cn } from "../helpers/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  isLoading?: boolean;
};

export function Button({
  variant = "primary",
  isLoading,
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition";
  const variants = {
    primary: "bg-rose-500 text-white shadow-glow hover:bg-rose-600",
    secondary:
      "border border-rose-200 bg-white text-ink-800 hover:border-rose-300",
    ghost: "text-ink-700 hover:bg-rose-100",
  };

  return (
    <button
      type="button"
      className={cn(
        base,
        variants[variant],
        isLoading && "opacity-70",
        className,
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? "Carregando..." : children}
    </button>
  );
}
