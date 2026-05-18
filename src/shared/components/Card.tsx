import { cn } from "../helpers/cn";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export function Card({ className, children }: CardProps) {
  return <div className={cn("card-surface p-6", className)}>{children}</div>;
}
