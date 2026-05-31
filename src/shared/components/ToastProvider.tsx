"use client";

import { useEffect, useState } from "react";
import { toastBus, type ToastMessage } from "../services/toast-bus";
import { cn } from "../helpers/cn";

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const unsubscribe = toastBus.subscribe((toast) => {
      setToasts((prev) => [...prev, toast]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((item) => item.id !== toast.id));
      }, 4200);
    });

    return unsubscribe;
  }, []);

  return (
    <>
      {children}
      <div className="fixed right-6 top-6 z-50 space-y-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={cn(
              "card-surface w-[280px] border-l-4 px-4 py-3 text-sm shadow-soft",
              toast.type === "success" && "border-rose-500",
              toast.type === "error" && "border-ink-700",
              toast.type === "info" && "border-rose-300",
            )}
          >
            {toast.title && (
              <p className="font-semibold text-ink-900">{toast.title}</p>
            )}
            <p className="text-ink-700">{toast.message}</p>
          </div>
        ))}
      </div>
    </>
  );
}
