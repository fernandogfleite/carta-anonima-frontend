import { cn } from "../helpers/cn";

type TagProps = {
  children: React.ReactNode;
  tone?: "rose" | "ink";
};

export function Tag({ children, tone = "rose" }: TagProps) {
  return (
    <span
      className={cn(
        "rounded-full px-3 py-1 text-xs font-semibold",
        tone === "rose"
          ? "bg-rose-100 text-rose-700"
          : "bg-ink-100 text-ink-700",
      )}
    >
      {children}
    </span>
  );
}
