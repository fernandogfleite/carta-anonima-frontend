import { cn } from "../helpers/cn";

type LoadingOverlayProps = {
  isVisible: boolean;
  label?: string;
};

export function LoadingOverlay({
  isVisible,
  label = "Carregando...",
}: LoadingOverlayProps) {
  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-40 flex items-center justify-center bg-ink-900/30 backdrop-blur",
      )}
      role="status"
      aria-live="polite"
    >
      <div className="card-surface px-6 py-4 text-sm text-ink-800">{label}</div>
    </div>
  );
}
