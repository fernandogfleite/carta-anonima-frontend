import { cn } from "../helpers/cn";

type BadgeProps = {
  label: string;
  variant?: "success" | "warning" | "info";
};

export function Badge({ label, variant = "info" }: BadgeProps) {
  const styles = {
    success: "bg-rose-100 text-rose-700",
    warning: "bg-ink-100 text-ink-700",
    info: "bg-rose-50 text-ink-700",
  };
  return (
    <span
      className={cn(
        "rounded-full px-3 py-1 text-xs font-semibold",
        styles[variant],
      )}
    >
      {label}
    </span>
  );
}
