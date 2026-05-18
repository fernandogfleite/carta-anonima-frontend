import { cn } from "../helpers/cn";

type TypographyProps = {
  as?: "p" | "span" | "h1" | "h2" | "h3";
  className?: string;
  children: React.ReactNode;
};

export function Typography({
  as: Component = "p",
  className,
  children,
}: TypographyProps) {
  return (
    <Component className={cn("text-ink-800", className)}>{children}</Component>
  );
}
