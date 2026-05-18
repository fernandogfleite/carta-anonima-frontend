"use client";

import type { InputHTMLAttributes } from "react";
import { cn } from "../helpers/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <label className="flex w-full flex-col gap-2 text-sm text-ink-700">
      {label && <span className="font-semibold text-ink-800">{label}</span>}
      <input
        className={cn(
          "w-full rounded-2xl border border-rose-100 bg-white/80 px-4 py-3 text-ink-900 shadow-sm focus:border-rose-300 focus:ring-2 focus:ring-rose-200",
          error && "border-ink-400",
          className,
        )}
        {...props}
      />
      {error && <span className="text-xs text-ink-700">{error}</span>}
    </label>
  );
}
