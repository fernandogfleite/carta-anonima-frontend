"use client";

import { cn } from "../helpers/cn";

type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal({ title, isOpen, onClose, children }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-ink-900/40 px-4">
      <div
        className={cn("card-surface w-full max-w-lg p-6")}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl text-ink-900">{title}</h2>
          <button type="button" onClick={onClose} className="text-ink-500">
            Fechar
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
